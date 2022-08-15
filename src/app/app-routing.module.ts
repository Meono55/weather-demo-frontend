import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',  redirectTo: 'weather'},
  {path: 'weather', component: WeatherDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
