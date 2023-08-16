import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name:'Turca', type: 'Dog', age: 2},
    {name:'Tom', type: 'Cat', age: 1},
    {name:'Frida', type: 'Dog',age: 1},
    {name:'Bob', type: 'Horse', age: 4},
  ]

  animal: Animal = {
    name: 'teste',
    type: 'QUalquer coisa',
    age: 12
  }

  peoples = [

    {name: 'Joao', age: 21, cpf: 77777777777, phone_number: 62999999999},
    {name: 'Thiago', age: 19, cpf: 666666666666, phone_number: 6288888888888},
    {name: 'Beatriz', age: 15, cpf: 555555555555, phone_number: 6277777777777},
    {name: 'Maria', age: 18, cpf: 44444444444, phone_number: 6266666666666},

  ]

  animalDetails = '';

  constructor(){}

  ngOnInit(): void {
      
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name}, tem ${animal.age} anos!`
  }

}
