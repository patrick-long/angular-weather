import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location:string) {
    return this.http.get(`http://api.weatherstack.com/forecast?access_key=9c992cd0c87f666755176a72842b6bd6&units=f&query=${location}`);
  }
}
