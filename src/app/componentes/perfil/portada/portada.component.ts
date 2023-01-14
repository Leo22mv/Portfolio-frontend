import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class FotoPortadaComponent implements OnInit {

  nombre: string = "Leonel Martinez";

  @Input() puedeEditar: boolean | undefined;
  @Input() estaEditandoNombre: boolean | undefined;

  // @Output() nombreEmiter: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  mostrarInput(evento: boolean) {
    this.estaEditandoNombre = evento;
  }

  editarNombre(evento: string) {
    this.nombre = evento;
    // this.nombreEmiter.emit(this.nombre);
  }

}
