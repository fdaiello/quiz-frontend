import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventsService } from '../event.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  question: Question = new Question();
  questions: Question[] = new Array<Question>();
  api: ApiService;
  event: EventsService;
    
  constructor(api: ApiService, event: EventsService) {
    this.api = api,
    this.event = event
   }

  ngOnInit(): void {
    this.api.getQuestions().subscribe(res=>
      this.questions = res as Question[]
    );
  }

}
