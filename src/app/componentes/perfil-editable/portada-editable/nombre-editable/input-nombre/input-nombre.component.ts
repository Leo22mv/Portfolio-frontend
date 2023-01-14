import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-nombre',
  templateUrl: './input-nombre.component.html',
  styleUrls: ['./input-nombre.component.css']
})
export class InputNombreComponent implements OnInit {

  nombre: string = "";

  @Output() booleanEmiter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() nombreEmiter: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  dejarDeEditarNombre() {
    this.booleanEmiter.emit(false);
    this.nombreEmiter.emit(this.nombre);
  }
}
