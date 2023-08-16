import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data-two',
  templateUrl: './parent-data-two.component.html',
  styleUrls: ['./parent-data-two.component.css']
})
export class ParentDataTwoComponent implements OnInit{

  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() cpf: number = 0;
  @Input() phone_number: number = 0;

  constructor(){}

  ngOnInit(): void {
      
  }

}
