import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { WeatherService } from './services/weather.service';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    WeatherDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
