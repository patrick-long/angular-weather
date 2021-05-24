import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  apiURL:string = 'http://api.weatherstack.com/forecast?access_key=9c992cd0c87f666755176a72842b6bd6&units=f&query=houston';

  constructor() { }

  ngOnInit(): void {
  }

}
