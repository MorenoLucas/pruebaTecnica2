import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../interfaces/ship';
import { usuarios } from '../../assets/usuarios.json';
@Injectable({
  providedIn: 'root',
})
export class ServApiService {
  private url = 'https://swapi.dev/api/vehicles/';
  user;
  detailsShip;
  constructor(private http: HttpClient) {}

  getShip(): Observable<Ship> {
    return this.http.get<Ship>(this.url);
  }
  // obtengo nave a buscar
  setShipDetails(url) {
    this.detailsShip = this.http.get<Ship>(url);
  }
  // muestro nave
  getShipDetails(): Observable<Ship> {
    return this.detailsShip;
  }
  getUser() {
    return this.user;
  }
  compareLogin(email: string, password: string) {
    this.user = usuarios.find(
      (user) => user.email === email && user.password === password
    );
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
}
