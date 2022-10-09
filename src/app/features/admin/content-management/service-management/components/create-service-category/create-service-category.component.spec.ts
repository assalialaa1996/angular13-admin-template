import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceCategoryComponent } from './create-service-category.component';

describe('CreateServiceCategoryComponent', () => {
  let component: CreateServiceCategoryComponent;
  let fixture: ComponentFixture<CreateServiceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServiceCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
