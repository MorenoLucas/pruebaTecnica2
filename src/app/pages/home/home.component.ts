import { Component, OnInit, NgZone, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Ship } from 'src/app/interfaces/ship';
import { ServApiService } from 'src/app/services/serv-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  vehicles;
  naves;
  user;
  constructor(
    private servApi: ServApiService,
    private router: Router,
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone
  ) {
    // this.user = this.servApi.getUser();
    // // if (this.user) {
    // this.servApi.getShip().subscribe((item: Ship) => {
    //   this.vehicles = item;
    //   this.naves = this.vehicles.results;
    // });
    // // }
  }

  ngOnInit() {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.ngZone.run(() => {
          this.servApi.getShip().subscribe((item: Ship) => {
            this.vehicles = item;
            this.naves = this.vehicles.results;
            console.log('logueado');
          });
        });
      } else {
        console.log('NOLOGUEADO');
      }
    });
  }

  goDetails(i, nomb) {
    this.servApi.setShipDetails(i);
    this.router.navigate(['details', nomb]);
  }
}
