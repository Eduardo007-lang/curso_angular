import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "Joaquin";

  userData = {
    email: 'joaquim@gmail.com',
    role: 'Admin',
  }
  
  userAddress: string = "Rua 38, Quadra 14 Lote 08" 

  title = 'curso_angular_yt';
}
