import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { Ingresos } from '../models/ingresos';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3050/api/';
  setSession: string;

  login(email: string, password: string) {
    return this.http.post<any>('/api/users/login', { email, password });
  }

  getIngresos() {
    return this.http.get<any>('/api/ingresos');
  }

  public getCategorias() {
    return this.http.get(`/api/categorias`);
  }
}
