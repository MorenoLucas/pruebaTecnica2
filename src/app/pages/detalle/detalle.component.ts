import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/interfaces/ship';
import { ServApiService } from '../../services/serv-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  nave;
  films;
  constructor(private servApi: ServApiService) {
    this.nave = {
      cargo_capacity: '',
      consumables: '',
      cost_in_credits: '',
      created: '',
      crew: '',
      edited: '',
      length: '',
      manufacturer: '',
      max_atmosphering_speed: '',
      model: '',
      name: '',
      passengers: '',
      pilots: [],
      films: [],
      url: '',
      vehicle_class: '',
    };
    // agarro nave a mostrar
    this.servApi.getShipDetails().subscribe((ship) => {
      this.nave = ship;
      console.log(ship);
    });
    // agarro peliculas
    this.films = this.servApi.getFilms();
  }

  ngOnInit(): void {}
}
