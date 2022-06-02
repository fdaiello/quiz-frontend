import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { ApiService } from '../services/api.service';
import { EventsService } from '../services/event.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  quizzes: Quiz[] = new Array<Quiz>();
  api : ApiService;
  event : EventsService;

  constructor(_api:ApiService, _event:EventsService) {
    this.api = _api;
    this.event = _event;
   }

  ngOnInit(): void {
    this.api.getAllQuizzes().subscribe(quizzes => this.quizzes = quizzes as Quiz[] );
    this.event.quizInserted.subscribe(quiz => this.quizzes.push(quiz))
  }


}
