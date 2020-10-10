import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';


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

  public getCategorias() {
    return this.http.get(`/api/categorias`);
  }
}
