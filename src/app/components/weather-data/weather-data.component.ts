import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  @Input() weatherData: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
