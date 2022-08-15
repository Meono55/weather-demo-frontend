import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayComponent } from './weather-display.component';
import { HttpClientModule } from '@angular/common/http'
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherDataComponent } from '../weather-data/weather-data.component';

describe('WeatherDisplayComponent', () => {
  let component: WeatherDisplayComponent;
  let fixture: ComponentFixture<WeatherDisplayComponent>;
  let service: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDisplayComponent, WeatherDataComponent],
      imports: [HttpClientModule],
      providers: [WeatherService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDisplayComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the service function when onSubmit() is triggered', () => {
    let testSpy = spyOn(service, 'getWeatherData').and.callThrough();
    component.onSubmit("1");
    expect(testSpy).toHaveBeenCalled();
  })
});
