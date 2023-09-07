import { People } from './../models/people';
import { Injectable } from '@angular/core';
import { Animal } from '../Animal';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){

    return animals.filter((a) => animal.name !== a.name);

  }

  removePeople(peoples: People[], people: People){
    return peoples.filter((p) => people.name !== p.name);
  }

}
