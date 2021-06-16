import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServApiService } from 'src/app/services/serv-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user;
  email: string;
  password: string;
  constructor(
    private router: Router,
    private servApi: ServApiService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    console.log('hola');
  }

  goRegister() {
    this.router.navigateByUrl('/register');
  }
  userCompare() {
    if (this.servApi.compareLogin(this.email, this.password)) {
      this.router.navigateByUrl('/');
    } else {
    }
    const usuario = this.auth.loginAuth(this.email, this.password);
    if (usuario) {
      // te lleva al home
      this.router.navigateByUrl('/');
    } else {
      alert('Usuario o contraseña no coinciden');
    }
  }
}
