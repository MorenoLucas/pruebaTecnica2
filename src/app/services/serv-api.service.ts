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

  constructor(private http: HttpClient) {}

  getShip(): Observable<Ship> {
    return this.http.get<Ship>(this.url);
  }

  compareLogin(email: string, password: string) {
    return usuarios.find(
      (user) => user.email === email && user.password === password
    );
  }
}
