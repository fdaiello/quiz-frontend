import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from './models/question'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private selectedQuestion = new Subject<Question>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor() { }

  selectQuestion(question: Question){
    this.selectedQuestion.next(question);
  }
  
}
