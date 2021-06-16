import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: boolean;
  constructor(
    private router: Router,
    private auth: AuthService,
    private Afauth: AngularFireAuth,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.Afauth.onAuthStateChanged((user) => {
      if (user) {
        this.ngZone.run(() => {
          this.user = true;
        });
      } else {
        this.user = false;
      }
    });
  }

  goHome() {
    this.router.navigateByUrl('/');
  }
  goLogin() {
    this.router.navigate(['login']);
    // this.user = this.auth.logueado();
    console.log(this.user);
  }
  logout() {
    this.auth.logout();
    // this.user = this.auth.logueado();
  }
}
