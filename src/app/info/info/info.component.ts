import { Component, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolioService/portfolio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() puedeEditar: boolean | undefined;
  estaEditandoNombre: boolean = false;
  @Output() estaEditandoNombre1: boolean | undefined;

  // miportfolio:any;

  // constructor(private datosPortfolio:PortfolioService) { }
  constructor() { }

  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe(data => this.miportfolio=data)
  }
}
