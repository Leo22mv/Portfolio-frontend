import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() puedeEditar: boolean | undefined;
  @Input() estaEditandoNombre: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  
}
