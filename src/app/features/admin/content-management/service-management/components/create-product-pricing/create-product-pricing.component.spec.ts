import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductPricingComponent } from './create-product-pricing.component';

describe('CreateProductPricingComponent', () => {
  let component: CreateProductPricingComponent;
  let fixture: ComponentFixture<CreateProductPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
