import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManListComponent } from './delivery-man-list.component';

describe('DeliveryManListComponent', () => {
  let component: DeliveryManListComponent;
  let fixture: ComponentFixture<DeliveryManListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryManListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryManListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
