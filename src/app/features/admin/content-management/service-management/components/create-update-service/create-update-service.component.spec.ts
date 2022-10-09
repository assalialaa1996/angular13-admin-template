import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateServiceComponent } from './create-update-service.component';

describe('CreateUpdateServiceComponent', () => {
  let component: CreateUpdateServiceComponent;
  let fixture: ComponentFixture<CreateUpdateServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
