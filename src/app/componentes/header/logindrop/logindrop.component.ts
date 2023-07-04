import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/models/iusuario.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logindrop',
  templateUrl: './logindrop.component.html',
  styleUrls: ['./logindrop.component.css']
})
export class LogindropComponent implements OnInit {

  user: IUsuario = new IUsuario();

  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  onClick() {
    // this.loginservice.loginUser(this.user).subscribe((response: HttpResponse<any>) => {
    //   if (response.status===200) {
    //     console.log("Inicio de sesion exitoso");
    //   } else {
    //     console.error("Error al iniciar sesión");
    //   }
    // })
    localStorage.setItem("token", "111")
  }
}
