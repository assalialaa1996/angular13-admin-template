import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLaundryComponent } from './login-laundry.component';

describe('LoginLaundryComponent', () => {
  let component: LoginLaundryComponent;
  let fixture: ComponentFixture<LoginLaundryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLaundryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
