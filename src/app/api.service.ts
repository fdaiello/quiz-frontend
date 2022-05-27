import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getQuestions(){
    return this.http.get('https://localhost:7275/api/Questions');
}
  postQuestion(question:any){
      this.http.post('https://localhost:7275/api/Questions',question).subscribe(res => {
        console.log(res);
      })
  }
}
