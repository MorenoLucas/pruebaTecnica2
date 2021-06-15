import { Component, OnInit } from '@angular/core';
import { ServApiService } from '../../services/serv-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  nave;
  constructor(private servApi: ServApiService) {
    // agarro nave a mostrar
    this.servApi.getShipDetails().subscribe((ship) => {
      this.nave = ship;
      console.log(ship);
    });
  }

  ngOnInit(): void {}
}
