import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  constructor(private _ApiService: ApiService) { }

  ngOnInit(): void {

  }

}
