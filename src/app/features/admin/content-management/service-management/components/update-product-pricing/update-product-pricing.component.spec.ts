import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductPricingComponent } from './update-product-pricing.component';

describe('UpdateProductPricingComponent', () => {
  let component: UpdateProductPricingComponent;
  let fixture: ComponentFixture<UpdateProductPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
