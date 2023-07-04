import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {

  @Input() puedeEditar: boolean | undefined;
  @Input() estaEditandoNombre: boolean | undefined;

  @Input() nombre: string = "Leonel Martinez";

  constructor() { }

  ngOnInit(): void {
  }

}
