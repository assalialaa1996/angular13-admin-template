import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { CreateServiceDto } from '../dtos/create-service.dto';
import { UpdateServiceDto } from '../dtos/update-service.dto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SERVICES}`);

  getOne = (id: string) => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SERVICES}/${id}`);

  remove = (id: string) => this.http.delete(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SERVICES}/${id}`);

  create = (createServiceDto: CreateServiceDto) => this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SERVICES}`, createServiceDto);

  update = (id: string, updateServiceDto: UpdateServiceDto) => this.http.
    patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SERVICES}/${id}`, updateServiceDto);

}
