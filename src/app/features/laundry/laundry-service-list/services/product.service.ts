import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';
import { AddProductToLaundryDto } from '../dtos/add-product-to-laundry.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.LAUNDRY.PRODUCTS}`);

  addToLaundry = (addToLaundryDto: AddProductToLaundryDto) =>
    this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.LAUNDRY.PRODUCTS}/add-to-laundry`, addToLaundryDto);

  removeProductFromLaundry = (laundryProductId: string) =>
    this.http.delete(`${environment.base_url}/${environment.api_prefix}/${endpoints.LAUNDRY.PRODUCTS}/remove-from-laundry/${laundryProductId}`);

}


