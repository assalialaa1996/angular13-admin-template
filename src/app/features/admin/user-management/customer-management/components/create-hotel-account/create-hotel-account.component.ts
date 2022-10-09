import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-hotel-account',
  templateUrl: './create-hotel-account.component.html',
  styleUrls: ['./create-hotel-account.component.scss']
})
export class CreateHotelAccountComponent implements OnInit {
  public createBusinessCustomerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,
    public dialogRef: MatDialogRef<CreateHotelAccountComponent>,) {
    this.createBusinessCustomerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  createUser = () => this.userService.createBusinessCustomer(this.createBusinessCustomerForm.getRawValue()).subscribe(
    res => this.dialogRef.close(res)
  )

}
