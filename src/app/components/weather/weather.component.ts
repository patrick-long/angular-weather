import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../../Services/apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  public todaysDate!: string;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
  }

  sendToAPIXU(formValues:any) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      })
  };

  // getCurrentDate() {
  //   const todaysDate = this.weatherData?.location.localtime.slice(0, 10);
  //   console.log(todaysDate);
  // }

}
