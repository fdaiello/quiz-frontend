import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { EventsService } from './event.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient, private event: EventsService) { }

  getQuestions(quizId:number){
    return this.http.get(`${this.API_URL}/api/Questions/${quizId}`);
  }

  postQuestion(question:Question){
      this.http.post(`${this.API_URL}/api/Questions`,question).subscribe(res => {
        console.log(res);
        this.event.insertQuestion(res as Question)
      })
  }

  putQuestion(question:Question){
    this.http.put(`${this.API_URL}/api/Questions/${question.id}`,question).subscribe(res => {
      console.log(res);
    })
  }

  getQuizzes() {
    return this.http.get(`${this.API_URL}/api/Quizzes`);
  }

  getAllQuizzes() {
    return this.http.get(`${this.API_URL}/api/Quizzes/all`);
  }

  postQuiz(quiz:Quiz){
    this.http.post(`${this.API_URL}/api/Quizzes`,quiz).subscribe(res => {
      console.log(res);
      this.event.insertQuiz(res as Quiz);
    })
  }

  putQuiz(quiz:Quiz){
    this.http.put(`${this.API_URL}/api/Quizzes/${quiz.id}`,quiz).subscribe(res => {
      console.log(res);
    })
  }

}
