import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(credentials:Credentials){
    return this.http.post<any>('https://localhost:7275/api/account',credentials).subscribe(
      res => {
        localStorage.setItem('token',res.value)
      }
    );
  }  
}
