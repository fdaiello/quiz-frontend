import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  postQuestion(question:string){
      this.http.post('',question).subscribe(res => {
        console.log(res);
      })
  }
}
