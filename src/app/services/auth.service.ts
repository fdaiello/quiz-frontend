import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL= environment.API_URL;  

  constructor(private http: HttpClient, private router: Router) { }

  // getter: return true if user is authenticated
  get isAuthenticated()
  {
    return !!localStorage.getItem('token')
  }

  // Register
  register(credentials:Credentials){
    return this.http.post<any>(`${this.API_URL}/api/account`,credentials).subscribe(
      res => {
        this.authenticate(res)
      }
    );
  }  

  // Login
  login(credentials:Credentials){
    return this.http.post<any>(`${this.API_URL}/api/account/login`,credentials).subscribe(
      res => {
        this.authenticate(res)
      }
    );
  }  

  // Authenticate
  private authenticate(res:any){
    localStorage.setItem('token',res.value);
    this.router.navigate(['/']);
  }

  // LogOut
  logout(){
    localStorage.removeItem('token')
  }
}
