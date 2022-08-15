import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/Weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api'
   }

  public getWeatherData(zipCode: number): Observable<Weather> {
      return this.http.get<Weather>(`${this.url}/weather/${zipCode}`)
  }

}
