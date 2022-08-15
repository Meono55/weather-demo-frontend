import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  let url = 'http://localhost:8080/api'

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getData()', () => {
    service.getWeatherData(1).subscribe((res) => {

    });
    const req = httpMock.expectOne(`${url}/weather/${1}`);
    expect(req.request.method).toEqual("GET");
  })
});
