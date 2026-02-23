import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './listcomponent/listcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab4');
  //register valuables
  count :number = 0;
  text :string = "Look at the star";
  displayedText :string = "";
  TextShown :boolean = false;

    //counter
  Click(){
    this.count++;
  }
    //Show text function
    ShowText(){
      this.TextShown = !this.TextShown;
    }
  }
