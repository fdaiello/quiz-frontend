import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  question: Question = new Question();
  questions: Question[] = new Array<Question>();
    
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getQuestions().subscribe(res=>
      this.questions = res as Question[]
    );
  }

}
