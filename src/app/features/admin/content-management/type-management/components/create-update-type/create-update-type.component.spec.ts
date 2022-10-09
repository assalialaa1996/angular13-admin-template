import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateTypeComponent } from './create-update-type.component';

describe('CreateUpdateTypeComponent', () => {
  let component: CreateUpdateTypeComponent;
  let fixture: ComponentFixture<CreateUpdateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
