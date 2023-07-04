
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EditServiceService } from 'src/app/services/EditService/edit-service.service';
import { AppRoutingModule } from '../../app-routing/app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // routerr: Router = this.router;

  datosIncorrectos: boolean = false;

  // auth: AuthService = new AuthService(this.routerr);
  edit: EditServiceService = new EditServiceService;

  username: string | undefined;
  password: string | undefined;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
    ) { 
    this.form= this.formBuilder.group({
      password:['',[Validators.required]],
      username:['', [Validators.required]],})
   }

  ngOnInit(): void {
    
    if (this.auth.logged) {
      this.router.navigate(["inicio"]);
    }

  }

  get Password(){
    return this.form.get("password");
  }
 
  get Username(){
   return this.form.get("username");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      // alert("Todo salio bien ¡Enviar formuario!")
      if (this.username==this.auth.cuenta.username&&this.password==this.auth.cuenta.password) {
        this.auth.login(this.username, this.password);
        this.router.navigate(["inicio"]);
        this.edit.puedeEditar = true;
      } else {
        this.datosIncorrectos = true
      }
      
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }
}