import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() puedeEditar: boolean | undefined;
  @Input() estaEditando: boolean | undefined;

  loginVisible: boolean = false;

  constructor(private router: Router) {}

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
    if (this.loginVisible) {
      this.loginVisible = false;
    } else {
      this.loginVisible = true;
    }
  }

  cambiarLoginFalse() {
    this.loginVisible = false;
  }
}