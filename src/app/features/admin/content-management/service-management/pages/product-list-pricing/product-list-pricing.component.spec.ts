import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPricingComponent } from './product-list-pricing.component';

describe('ProductListPricingComponent', () => {
  let component: ProductListPricingComponent;
  let fixture: ComponentFixture<ProductListPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
