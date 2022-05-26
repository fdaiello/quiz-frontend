import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: string = "";
  
  constructor( private api : ApiService) { }

  ngOnInit(): void {
  }

  post(question: string){
    this.api.postQuestion(question);
  }
}
