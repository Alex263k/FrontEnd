import { Component, OnInit,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  students:any[]=[];
  weather: any[]=[];

  constructor(private dataService:DataService){}
  ngOnInit(): void{

    //data for student
    this.dataService.GetStudentData().subscribe(
    (data)=>{
      this.students = data.students;
      console.log(this.students);
    }
  );

  //data for weather
  this.dataService.GetWeatherData().subscribe(
        (data)=>{
      this.weather = data.weather;
      console.log(this.weather);
        }
  );
  }
}
