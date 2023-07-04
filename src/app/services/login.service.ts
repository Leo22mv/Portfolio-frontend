import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080"; // Url del backend

  constructor( private httpClient: HttpClient) { }

  loginUser(user: IUsuario): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(`${this.baseUrl}`+`/login`, user, {observe: "response"});
  }
}
