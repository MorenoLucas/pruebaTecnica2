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

  ngOnInit(): void {}

  goRegister() {
    this.router.navigateByUrl('/register');
  }
  userCompare() {
    this.auth.loginAuth(this.email, this.password);
  }
}
