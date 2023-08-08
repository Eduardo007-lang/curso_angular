import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{

  public show: boolean = false;

  constructor(){}

  ngOnInit(): void { }

  showMenu(): void{
    this.show = !this.show; //toggle
  }
}
