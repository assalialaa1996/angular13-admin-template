import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryOwnerListComponent } from './laundry-owner-list.component';

describe('LaundryOwnerListComponent', () => {
  let component: LaundryOwnerListComponent;
  let fixture: ComponentFixture<LaundryOwnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaundryOwnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
