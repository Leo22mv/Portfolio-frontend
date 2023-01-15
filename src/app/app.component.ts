import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // auth: any;
  // routerr: Router = new Router(null, undefined, undefined, undefined, undefined, undefined, undefined);

  constructor(
    private router: Router,
    private auth: AuthService
    ) {
    
  }

  // routerr: Router = this.router;

  // auth: AuthService = new AuthService(this.routerr);

  puedeEditar: boolean | undefined;

  title = 'proyectoAngular';  
  
  ngOnInit(): void {
    if (
      this.auth.logged
      ) {
      
    }
  }

  habilitarEdicion() {
    this.puedeEditar = !this.puedeEditar;
  }
  
}
