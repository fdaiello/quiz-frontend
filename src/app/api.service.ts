import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './models/question'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getQuestions(){
    return this.http.get('https://localhost:7275/api/Questions');
  }

  postQuestion(question:Question){
      this.http.post('https://localhost:7275/api/Questions',question).subscribe(res => {
        console.log(res);
      })
  }

  putQuestion(question:Question){
    this.http.put(`https://localhost:7275/api/Questions/${question.id}`,question).subscribe(res => {
      console.log(res);
    })
  }

}
