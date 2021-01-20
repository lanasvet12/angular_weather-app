import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=9a8d8f5877b15af6dc9408c396753b18&query=" + location
        
    );
  }
}
