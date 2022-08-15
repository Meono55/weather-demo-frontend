import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  public weatherData!: Weather;

  constructor(private service: WeatherService) {
   }

  ngOnInit(): void {

  }

  public onSubmit(zipCode : string){
    this.service.getWeatherData(+zipCode).subscribe(response => {
      this.weatherData = response;
    })
  }

}
