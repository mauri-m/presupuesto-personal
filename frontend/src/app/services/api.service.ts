import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3050/api/';

  login(email: string, password: string) {
    return this.http.post<any>('/api/users/login', { email, password });
  }

  getIngresos(userId: string) {
    return this.http.get<any>(`/api/ingresos/${userId}`);
  }

  getEgresos(userId: string) {
    return this.http.get<any>(`/api/egresos/${userId}`);
  }

  public getCategorias() {
    return this.http.get<any>(`/api/categorias`);
  }
}
