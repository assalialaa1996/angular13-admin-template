import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/shared/model/service.model';
import { FileService } from 'src/app/shared/services/file.service';
import { environment } from 'src/environments/environment';
import { CreateUpdateCategoryComponent } from '../../../category-management/components/create-update-category/create-update-category.component';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-create-update-type',
  templateUrl: './create-update-type.component.html',
  styleUrls: ['./create-update-type.component.scss']
})
export class CreateUpdateTypeComponent implements OnInit {

  files: File[] = [];
  public createTypeForm: FormGroup;
  server: string;

  constructor(private fileService: FileService,
    public dialogRef: MatDialogRef<CreateUpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service,
    private fb: FormBuilder,
    private typeService: TypeService) {
    this.server = environment.base_url;
    if (data) {
      this.createTypeForm = this.fb.group({
        name: [data?.name, [Validators.required]],
      });
    }
    else
      this.createTypeForm = this.fb.group({
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

  createType = () => {
    if (this.files.length == 1) this.fileService.uploadFile(this.files[0]).subscribe(
      (res: any) => {
        const service = this.createTypeForm.getRawValue();
        service.image = res.id;
        this.typeService.create(service).subscribe(
          res => this.dialogRef.close(res)
        )
      }
    )
  }

  updateType = () => {
    if (this.files.length == 1) this.fileService.uploadFile(this.files[0]).subscribe(
      (res: any) => {
        const service = this.createTypeForm.getRawValue();
        service.image = res.id;
        this.typeService.update(this.data.id, service).subscribe(
          res => this.dialogRef.close(res)
        )
      }
    ); else {
      const service = this.createTypeForm.getRawValue();
      this.typeService.update(this.data.id, service).subscribe(
        res => this.dialogRef.close(res)
      )
    }
  }


}
