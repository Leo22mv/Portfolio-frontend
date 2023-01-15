import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolioService/portfolio.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() puedeEditar: boolean | undefined;
  @Input() estaEditando: boolean | undefined;

  routerr: Router = this.router;

  isLogged: boolean = localStorage.getItem("token") !== null;

  // authService: AuthService = new AuthService(this.routerr);

  loginVisible: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {  
  }


  onClick() {
    if (this.loginVisible) {
      this.router.navigateByUrl("inicio");
    } else {
      this.router.navigateByUrl("login");
    }
    this.cambiarLogin();
  }

  cambiarLogin () {
    this.loginVisible = !this.loginVisible
  }
  
  cambiarLoginFalse() {
    this.loginVisible = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}