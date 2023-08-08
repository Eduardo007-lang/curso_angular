import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name:'Turca', type: 'Dog'},
    {name:'Tom', type: 'Cat'},
    {name:'Frida', type: 'Dog'},
    {name:'Bob', type: 'Horse'},
  ]

  peoples = [

    {name: 'Joao', age: 21},
    {name: 'Thiago', age: 19},
    {name: 'Beatriz', age: 15},
    {name: 'Maria', age: 18},

  ]

  constructor(){}

  ngOnInit(): void {
      
  }

}
