import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  //Imported component
  imports: [CommonModule],

  
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css',
})
export class Listcomponent {
//List of components
  presidents: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];



}
