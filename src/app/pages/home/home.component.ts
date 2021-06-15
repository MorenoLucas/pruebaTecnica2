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
  constructor(private servApi: ServApiService) {}

  ngOnInit(): void {
    this.getSship();
  }

  getSship() {
    this.servApi.getShip().subscribe((item: Ship) => {
      this.vehicles = item;
    });
  }
}
