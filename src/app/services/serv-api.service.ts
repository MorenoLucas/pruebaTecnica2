import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../interfaces/ship';
@Injectable({
  providedIn: 'root',
})
export class ServApiService {
  private url = 'https://swapi.dev/api/vehicles/';

  constructor(private http: HttpClient) {}

  getShip(): Observable<Ship> {
    return this.http.get<Ship>(this.url);
  }
}
