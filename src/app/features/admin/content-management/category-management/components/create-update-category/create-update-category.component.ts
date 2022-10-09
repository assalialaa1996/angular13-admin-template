import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/shared/model/service.model';
import { FileService } from 'src/app/shared/services/file.service';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {

  files: File[] = [];
  public createCategoryForm: FormGroup;
  server: string;

  constructor(private fileService: FileService,
    public dialogRef: MatDialogRef<CreateUpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service,
    private fb: FormBuilder,
    private categoryService: CategoryService) {
    this.server = environment.base_url;
    if (data) {
      this.createCategoryForm = this.fb.group({
        name: [data?.name, [Validators.required]],
      });
    }
    else
      this.createCategoryForm = this.fb.group({
        name: ['', [Validators.required]],
      });
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files = [];
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  createCategory = () => {
    if (this.files.length == 1) this.fileService.uploadFile(this.files[0]).subscribe(
      (res: any) => {
        const service = this.createCategoryForm.getRawValue();
        service.image = res.id;
        this.categoryService.create(service).subscribe(
          res => this.dialogRef.close(res)
        )
      }
    )
  }

  updateCategory = () => {
    if (this.files.length == 1) this.fileService.uploadFile(this.files[0]).subscribe(
      (res: any) => {
        const service = this.createCategoryForm.getRawValue();
        service.image = res.id;
        this.categoryService.update(this.data.id, service).subscribe(
          res => this.dialogRef.close(res)
        )
      }
    ); else {
      const service = this.createCategoryForm.getRawValue();
      this.categoryService.update(this.data.id, service).subscribe(
        res => this.dialogRef.close(res)
      )
    }
  }

}
