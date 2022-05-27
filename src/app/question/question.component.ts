import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

   question: Question = new Question();
  
  constructor( private api : ApiService) { }

  ngOnInit(): void {
  }

  post(question: Question){
    this.api.postQuestion(question);
  }
}
