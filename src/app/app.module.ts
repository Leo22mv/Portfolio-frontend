import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InfoComponent } from './info/info/info.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { LoginModule } from './login/login.module';
import { EditModule } from './edit/edit.module';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EditNombreComponent } from './componentes/perfil-editable/portada-editable/nombre-editable/edit-nombre/edit-nombre.component';
import { InputNombreComponent } from './componentes/perfil-editable/portada-editable/nombre-editable/input-nombre/input-nombre.component';
import { NombreComponent } from './componentes/perfil/portada/nombre/nombre.component';
import { TituloComponent } from './componentes/perfil/portada/titulo/titulo.component';
import { UbicacionComponent } from './componentes/perfil/portada/ubicacion/ubicacion.component';
import { FotoPerfilComponent } from './componentes/perfil/portada/foto-perfil/foto-perfil.component';
import { FotoPortadaComponent } from './componentes/perfil/portada/portada.component';
import { PerfilEditableComponent } from './componentes/perfil-editable/perfil-editable.component';
import { PortadaEditableComponent } from './componentes/perfil-editable/portada-editable/portada-editable.component';
import { NombreEditableComponent } from './componentes/perfil-editable/portada-editable/nombre-editable/nombre-editable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    Error404Component,
    LoginComponent,
    PerfilComponent,
    EditNombreComponent,
    InputNombreComponent,
    NombreComponent,
    TituloComponent,
    UbicacionComponent,
    FotoPerfilComponent,
    FotoPortadaComponent,
    PerfilEditableComponent,
    PortadaEditableComponent,
    NombreEditableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    InfoComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    SobreMiComponent,
    PerfilComponent,
    ProyectosComponent,
    PerfilEditableComponent,
    FotoPerfilComponent,
    NombreEditableComponent,
    TituloComponent,
    UbicacionComponent,
    InputNombreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
