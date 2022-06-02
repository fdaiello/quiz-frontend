import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { EventsService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient, private event: EventsService) { }

  getQuestions(quizId:number){
    return this.http.get(`https://localhost:7275/api/Questions/${quizId}`);
  }

  postQuestion(question:Question){
      this.http.post('https://localhost:7275/api/Questions',question).subscribe(res => {
        console.log(res);
        this.event.insertQuestion(res as Question)
      })
  }

  putQuestion(question:Question){
    this.http.put(`https://localhost:7275/api/Questions/${question.id}`,question).subscribe(res => {
      console.log(res);
    })
  }

  getQuizzes() {
    return this.http.get('https://localhost:7275/api/Quizzes');
  }

  getAllQuizzes() {
    return this.http.get('https://localhost:7275/api/Quizzes/all');
  }

  postQuiz(quiz:Quiz){
    this.http.post('https://localhost:7275/api/Quizzes',quiz).subscribe(res => {
      console.log(res);
      this.event.insertQuiz(res as Quiz);
    })
  }

  putQuiz(quiz:Quiz){
    this.http.put(`https://localhost:7275/api/Quizzes/${quiz.id}`,quiz).subscribe(res => {
      console.log(res);
    })
  }

}
