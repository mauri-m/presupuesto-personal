import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Ingresos } from 'src/app/models/ingresos';
import { Egresos } from 'src/app/models/egresos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  ingresos: Ingresos[];
  egresos: Egresos[];
  categorias: Categorias[];
  totalIngreso: number = 0;
  totalEgreso: number = 0;
  diferencia: number = 0;

  constructor(private router: Router,
    private _ApiService: ApiService) { }

  ngOnInit(): void {
    this._ApiService.getIngresos(localStorage.getItem('userId')).subscribe({
      next: data => {
        if (data.error) {
          this.router.navigate(['/login']);
        } else {
          this.ingresos = data;
          this.cargarEgresos();
          this.cargarCategorias();
        }
      }
    });

  }



  cargarEgresos() {
    this._ApiService.getEgresos(localStorage.getItem('userId')).subscribe({
      next: data => {
        if (data.error) {
          this.router.navigate(['/login']);
        } else {
          this.egresos = data;
          this.balance();
        }
      }
    });
  }

  cargarCategorias() {
    this._ApiService.getCategorias().subscribe({
      next: data => {
        if (data.error) {
          this.router.navigate(['/login']);
        } else {
          this.categorias = data;
        }
      }
    });
  }

  async balance() {
    const resultIngreso = await this.calcularIngreso();
    const resultEgreso = await this.calcularEgreso()
    this.diferencia = Number(resultIngreso) - Number(resultEgreso);
  }

  calcularIngreso() {
    return new Promise(resolve => {
      this.ingresos.forEach(ingreso => {
        this.totalIngreso = this.totalIngreso + ingreso.monto;
      });
      resolve(this.totalIngreso);
    })
  }

  calcularEgreso() {
    return new Promise(resolve => {
      this.egresos.forEach(egreso => {
        this.totalEgreso = this.totalEgreso + egreso.monto;
      });
      resolve(this.totalEgreso);
    })
  }

}
