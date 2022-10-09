import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { CustomerTypeEnum } from '../customer-management/pages/customer-list/customer-list.component';
import { CreateBusinessCustomerDto } from '../customer-management/dtos/create-business-customer.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCustomers = (type: string) => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.USERS}/customers?type=${type}`);

  getLaundryOwners = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.USERS}/laundry-owners`);

  createBusinessCustomer = (createBusinessCustomerDto: CreateBusinessCustomerDto) => this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.USERS}/business-customer`,
    createBusinessCustomerDto);
}
