import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Question } from './models/question'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestion = new Subject<Question>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor( private http: HttpClient) { }

  getQuestions(){
    return this.http.get('https://localhost:7275/api/Questions');
  }

  postQuestion(question:any){
      this.http.post('https://localhost:7275/api/Questions',question).subscribe(res => {
        console.log(res);
      })
  }

  selectQuestion(question: Question){
    this.selectedQuestion.next(question)
  }
}
