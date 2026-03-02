import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient:HttpClient){}

  //student
  GetStudentData():Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019caf35-b043-77d6-8c46-360369aead8d')
  }
//weather
  GetWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')
  }  
}
