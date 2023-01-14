import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = "http://localhost:8080";

  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    this.http.post(this.uri + "/autenticar", {
      username: username, password: password
    }).subscribe((resp: any) => {
      localStorage.setItem("auth_token", resp.token);
    })
  }

  logout() {
    localStorage.removeItem("token");
  }

  public get logged(): boolean {
    return (localStorage.getItem("token") !== null)
  }
}
