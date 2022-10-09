import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUpdateServiceComponent } from '../create-update-service/create-update-service.component';
import { CategoryService } from '../../../category-management/services/category.service';

@Component({
  selector: 'app-create-service-category',
  templateUrl: './create-service-category.component.html',
  styleUrls: ['./create-service-category.component.scss']
})
export class CreateServiceCategoryComponent implements OnInit {
  public createServiceForm: FormGroup;
  categories: any;

  constructor(
    public dialogRef: MatDialogRef<CreateUpdateServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private categoryService: CategoryService) {
    if (data) {
      this.createServiceForm = this.fb.group({
        category: ['', [Validators.required]],
        service: [data?.service, [Validators.required]],
      });
    }
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories = () => this.categoryService.getAll().subscribe(
    (res: any) => {
      this.categories = res
    }
  )

  attachCategoryToService() {
    this.categoryService.attachCategoryToService(this.createServiceForm.getRawValue()).subscribe(
      res => this.dialogRef.close(res)
    )
  }


}
