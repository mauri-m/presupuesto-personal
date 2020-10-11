import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {

  formContacto: FormGroup;

  constructor(
    private router: Router,
    private _ApiService: ApiService,
    private _builder: FormBuilder) {
    this.formContacto = this._builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(formData: { email: string; password: string; }) {
    this._ApiService.login(formData.email, formData.password).subscribe({
      next: data => {
        localStorage.setItem('user-token', data.success);
        localStorage.setItem('userId', data.id);
        console.log(data)
        this.router.navigate(['/home']);
      },
      error: error => {
        console.log(error);
        alert("Email or password incorrect");
      }
    });
  }

}
