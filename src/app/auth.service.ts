import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cuenta = {
    username: "a",
    password: "a"
  }

  // uri = "http://localhost:8080";

  token: any;

  constructor(
    // private http: HttpClient,
    private router: Router
    // ,
    ) { }

  login(username: string, password: string) {
    // this.http.post(this.uri + "/autenticar", {
    //   username: username, password: password
    // }).subscribe((resp: any) => {
    //   localStorage.setItem("auth_token", resp.token);
    // })
    if (username==this.cuenta.username&&password==this.cuenta.password) {
      localStorage.setItem("token", "123");
      // habilitarEdicion();
    }

  }

  logout() {
    localStorage.removeItem("token");
    // router: Router = new Router();
    this.router.navigate(["inicio"]);
  }

  public get logged(): boolean {
    return (localStorage.getItem("token") !== null)
  }
}
