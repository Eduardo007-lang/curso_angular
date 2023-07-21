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
  title = 'curso_angular_yt';
}
