import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServApiService } from 'src/app/services/serv-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private servApi: ServApiService) {}

  ngOnInit(): void {}

  goRegister() {
    this.router.navigateByUrl('/register');
  }
}
