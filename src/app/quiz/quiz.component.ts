import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { ApiService } from '../services/api.service';
import { EventsService } from '../services/event.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz = new Quiz();
  newQuiz: Quiz = new Quiz();
  api: ApiService;
  event: EventsService;

  constructor(api: ApiService, event: EventsService) { 
    this.api = api;
    this.event = event;
  }

  ngOnInit(): void {
    this.event.quizSelected.subscribe(quiz => this.quiz = quiz);
  }

}
