import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
 // Usando propriedades para inserir na diretiva style do component  
  size = 40;
  font = 12;
  color = 'blue';

  classes = ['green-title', 'small-title'];


  constructor(){}

  ngOnInit(): void {
      
  }

}
