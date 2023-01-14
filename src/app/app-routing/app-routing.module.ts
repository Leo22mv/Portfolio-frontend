import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { EditComponent } from '../edit/edit/edit.component';
import { Error404Component } from '../componentes/error404/error404.component';
import { InfoComponent } from '../info/info/info.component';
import { LoginComponent } from '../componentes/login/login.component';
import { InputNombreComponent } from '../componentes/perfil-editable/portada-editable/nombre-editable/input-nombre/input-nombre.component';
import { LoginModule } from '../login/login.module';
import { NombreEditableComponent } from '../componentes/perfil-editable/portada-editable/nombre-editable/nombre-editable.component';
import { EditNombreComponent } from '../edit/edits/edit-nombre/edit-nombre.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
{path: "login", component: LoginComponent},
{path: "inicio", component: AppComponent},
{path: "editar", component: EditComponent 
// ,canActivate: [AuthGuard]
},
{path: "editar-nombre", component: EditNombreComponent},
{path: "", redirectTo: "/inicio", pathMatch: 'full'},
{path: '**', component: Error404Component}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
