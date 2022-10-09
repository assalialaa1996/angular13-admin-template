import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {

  constructor(private http: HttpClient) { }

  getOne = () =>
    this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.LAUNDRY.LAUNDRIES}/mine`);

}
