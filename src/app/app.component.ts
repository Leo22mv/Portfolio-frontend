import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  puedeEditar: boolean = false;
  title = 'proyectoAngular';  

  habilitarEdicion() {
    if (!this.puedeEditar) {
      this.puedeEditar = true;
    } else {
      this.puedeEditar = false;
    }
  }
  
}
