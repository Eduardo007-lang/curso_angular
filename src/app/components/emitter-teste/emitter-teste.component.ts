import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter-teste',
  templateUrl: './emitter-teste.component.html',
  styleUrls: ['./emitter-teste.component.css']
})
export class EmitterTesteComponent implements OnInit {

  myNewNumber: number = 0;

  constructor(){}

  ngOnInit(): void {
      
  }

  onGenerateNumber(): void {
      this.myNewNumber = Math.floor(Math.random() * 100);
  }

}
