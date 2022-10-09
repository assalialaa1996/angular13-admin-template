import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';
import { CreateServiceDto } from '../../service-management/dtos/create-service.dto';
import { UpdateServiceDto } from '../../service-management/dtos/update-service.dto';
import { AttachCategoryToServiceDto } from '../dtos/attach-category-to-service.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}`);

  getServiceCategory = (id: string) => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}/service-category/${id}`);

  remove = (id: string) => this.http.delete(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}/${id}`);

  create = (createServiceDto: CreateServiceDto) => this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}`, createServiceDto);

  update = (id: string, updateServiceDto: UpdateServiceDto) => this.http.
    patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}/${id}`, updateServiceDto);

  attachCategoryToService = (attachCategoryToServiceDto: AttachCategoryToServiceDto) => this.http.
    patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}/attach-category-to-service`, attachCategoryToServiceDto);

  removeCategoryFromService = (serviceCategoryId) => this.http.
    patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}/remove-category-from-service/${serviceCategoryId}`, {});

}


