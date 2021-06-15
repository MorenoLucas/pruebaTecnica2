import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/interfaces/ship';
import { ServApiService } from 'src/app/services/serv-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  vehicles;
  naves;
  user;
  constructor(private servApi: ServApiService) {
    this.user = this.servApi.getUser();
    // if (this.user) {
    this.servApi.getShip().subscribe((item: Ship) => {
      this.vehicles = item;
      this.naves = this.vehicles.results;
    });
    // }
  }

  ngOnInit() {}
}
