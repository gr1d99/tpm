import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SignupModel} from "../models/signup.model";

@Injectable({
  providedIn: 'root'
})
export class SignupUserService {
  constructor(private http: HttpClient) {}

  url = 'https://reqres.in/api/users/'

  signup(user: SignupModel) {
    return this.http.post<any>(this.url, user)
  }
}
