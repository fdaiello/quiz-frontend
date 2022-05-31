import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { EventsService } from '../services/event.service';
import { Question } from '../models/question';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  question: Question = new Question();
  questions: Question[] = new Array<Question>();
  api: ApiService;
  event: EventsService
    
  constructor(api: ApiService, event: EventsService, private route: ActivatedRoute) {
    this.api = api,
    this.event = event
   }

  ngOnInit(): void {
    var quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    this.api.getQuestions(quizId).subscribe(res=>
      this.questions = res as Question[]
    );

    this.event.questionInserted.subscribe( res => this.questions.push(res as Question))

  }

}
