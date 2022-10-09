import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../category-management/services/category.service';
import { TypeService } from '../../../type-management/services/type.service';
import { ProductService } from '../../../product-management/services/product/product.service';

@Component({
  selector: 'app-create-product-pricing',
  templateUrl: './create-product-pricing.component.html',
  styleUrls: ['./create-product-pricing.component.scss']
})
export class CreateProductPricingComponent implements OnInit {

  public createProductPricingForm: FormGroup;
  types: any;

  constructor(
    public dialogRef: MatDialogRef<CreateProductPricingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private typeService: TypeService,
    private productService: ProductService) {
    if (data) {
      this.createProductPricingForm = this.fb.group({
        customPrice: ['', [Validators.required]],
        businessPrice: ['', [Validators.required]],
        serviceCategory: [data?.service, [Validators.required]],
        type: ['', [Validators.required]],
      });
    }
  }

  ngOnInit(): void {
    this.getTypes()
  }

  getTypes = () => this.typeService.getAll().subscribe(
    (res: any) => {
      this.types = res
    }
  );

  createProduct = () => {
    return this.productService.create(this.createProductPricingForm.getRawValue()).subscribe(
      res => this.dialogRef.close(res)
    )
  }

}
