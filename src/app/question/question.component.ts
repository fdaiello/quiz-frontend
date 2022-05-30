import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventsService } from '../event.service';
import { Question } from '../models/question';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question = new Question();
  question1: Question = new Question();
  quizId: number = 0;
  
  constructor( private api : ApiService, private event: EventsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event.questionSelected.subscribe(question => this.question = question);
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
  }

  post(question: Question){
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }

  put(question: Question){
    this.api.putQuestion(question);
  }

}
