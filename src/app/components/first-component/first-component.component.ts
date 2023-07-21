import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  @Input() address: string = "";

  name: string = "Eduardo";
  age: number = 23;
  job: string = "programador";
  hobbie = ["Correr", "Estudar", "Jogar"];
  car = {
    name: "Polo",
    year: 2020
  }



  constructor(){}
  
  ngOnInit():void {
    
  }
 

}
