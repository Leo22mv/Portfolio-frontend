import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { AppModule } from '../app.module';
import { EditNombreComponent } from './edits/edit-nombre/edit-nombre.component';
import { EditTituloComponent } from './edits/edit-titulo/edit-titulo.component';
import { EditUbicacionComponent } from './edits/edit-ubicacion/edit-ubicacion.component';
import { EditFotoPerfilComponent } from './edits/edit-foto-perfil/edit-foto-perfil.component';



@NgModule({
    declarations: [EditComponent, EditNombreComponent, EditTituloComponent, EditUbicacionComponent, EditFotoPerfilComponent],
    imports: [
        CommonModule,
        AppModule,
    ]
})
export class EditModule { }
