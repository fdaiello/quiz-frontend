import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { ApiService } from '../api.service';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quizzes: Quiz[] = new Array<Quiz>();
  api : ApiService;
  event : EventsService;

  constructor(_api:ApiService, _event:EventsService) {
    this.api = _api;
    this.event = _event;
   }

  ngOnInit(): void {
    this.api.getQuizzes().subscribe(quizzes => this.quizzes = quizzes as Quiz[] );
    this.event.quizInserted.subscribe(quiz => this.quizzes.push(quiz))
  }

}
