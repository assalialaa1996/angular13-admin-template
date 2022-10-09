import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../../product-management/services/product/product.service';
import { TypeService } from '../../../type-management/services/type.service';
import { CreateProductPricingComponent } from '../create-product-pricing/create-product-pricing.component';

@Component({
  selector: 'app-update-product-pricing',
  templateUrl: './update-product-pricing.component.html',
  styleUrls: ['./update-product-pricing.component.scss']
})
export class UpdateProductPricingComponent implements OnInit {

  public updateProductPricingForm: FormGroup;
  types: any;

  constructor(
    public dialogRef: MatDialogRef<CreateProductPricingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private typeService: TypeService,
    private productService: ProductService) {
    if (data) {
      this.updateProductPricingForm = this.fb.group({
        customPrice: [data.customPrice, [Validators.required]],
        businessPrice: [data.businessPrice, [Validators.required]],
      });
    }
  }

  ngOnInit(): void {

  }



  updateProduct = () => {
    return this.productService.update(this.data.id, this.updateProductPricingForm.getRawValue()).subscribe(
      res => this.dialogRef.close(res)
    )
  }

}
