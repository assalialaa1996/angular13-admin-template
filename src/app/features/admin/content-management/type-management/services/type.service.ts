import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';
import { CreateServiceDto } from '../../service-management/dtos/create-service.dto';
import { UpdateServiceDto } from '../../service-management/dtos/update-service.dto';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.TYPES}`);

  remove = (id: string) => this.http.delete(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.TYPES}/${id}`);

  create = (createServiceDto: CreateServiceDto) => this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.TYPES}`, createServiceDto);

  update = (id: string, updateServiceDto: UpdateServiceDto) => this.http.
    patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.TYPES}/${id}`, updateServiceDto);
}
