import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../_models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

   question: Question = {} as Question;
  
  constructor( private api : ApiService) { }

  ngOnInit(): void {
  }

  post(question:any){
    this.api.postQuestion(question);
  }
}
