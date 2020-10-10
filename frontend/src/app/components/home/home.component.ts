import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private _ApiService: ApiService) { }

  ngOnInit(): void {
    this._ApiService.getIngresos().subscribe({
      next: data => {
        if (data.error) {
          this.router.navigate(['/login']);
        }
      }
    });
  }

}
