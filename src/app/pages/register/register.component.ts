import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  name: string;
  phone: string;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.registerAuth(this.email, this.password);
  }
}
