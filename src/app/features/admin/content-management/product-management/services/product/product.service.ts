import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';
import { CreateServiceDto } from '../../../service-management/dtos/create-service.dto';
import { UpdateServiceDto } from '../../../service-management/dtos/update-service.dto';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { UpdateProductDto } from '../../dtos/update-product.dto';

@Injectable({
    providedIn: 'root'
  })
export class ProductService {
    constructor(private http: HttpClient) { }

    getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.PRODUCTS}`);
  
    getOne = (id: string) => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.PRODUCTS}/${id}`);
  
    remove = (id: string) => this.http.delete(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.PRODUCTS}/${id}`);
  
    create = (createProductDto: CreateProductDto) => this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.PRODUCTS}`, createProductDto);
  
    update = (id: string, updateProductDto: UpdateProductDto) => this.http.
      patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.PRODUCTS}/${id}`, updateProductDto);
  
}
