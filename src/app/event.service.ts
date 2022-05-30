import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from './models/question';
import { Quiz } from './models/quiz';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // Select question Observer
  private selectedQuestion = new Subject<Question>();
  questionSelected = this.selectedQuestion.asObservable();

  // Select quiz Observer
  private selectedQuiz = new Subject<Quiz>();
  quizSelected = this.selectedQuiz.asObservable();

  // Insert quiz Observer
  private insertedQuiz = new Subject<Quiz>();
  quizInserted = this.insertedQuiz.asObservable();  

  // Insert question Observer
  private insertedQuestion = new Subject<Question>();
  questionInserted = this.insertedQuestion.asObservable();

  constructor() { }

  // Select question Event
  selectQuestion(question: Question){
    this.selectedQuestion.next(question);
  }

  // Select quiz Event
  selectQuiz(quiz: Quiz){
    this.selectedQuiz.next(quiz);
  }

  // Insert quiz Event
  insertQuiz(quiz: Quiz){
    this.insertedQuiz.next(quiz);
  }

  // Insert questio Event
  insertQuestion(question: Question){
    this.insertedQuestion.next(question);
  }
}
