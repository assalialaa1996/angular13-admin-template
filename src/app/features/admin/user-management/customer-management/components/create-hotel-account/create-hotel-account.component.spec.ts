import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelAccountComponent } from './create-hotel-account.component';

describe('CreateHotelAccountComponent', () => {
  let component: CreateHotelAccountComponent;
  let fixture: ComponentFixture<CreateHotelAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHotelAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHotelAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
