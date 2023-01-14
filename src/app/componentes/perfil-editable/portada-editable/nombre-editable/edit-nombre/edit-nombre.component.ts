import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-nombre',
  templateUrl: './edit-nombre.component.html',
  styleUrls: ['./edit-nombre.component.css']
})
export class EditNombreComponent implements OnInit {

  @Input() estaEditandoNombre: boolean | undefined;
  @Output() emiter: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  // public editarNombre() {
  //   let nombree:any = document.getElementById("nombre");
  //   let inputt:any = document.getElementsByClassName("inpnombre")
  //   let tildee:any = document.getElementById("tilnombre");
  //   nombree.style.display = "none";
  //   inputt.style.display = "flex";
  //   tildee.style.display = "flex";
  // }
  
  editarNombre() {
    this.emiter.emit(true);
  }
}
