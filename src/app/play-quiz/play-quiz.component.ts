import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Question } from '../models/question';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FinishedComponent } from '../finished/finished.component';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {

  step = 0;
  quizId = 0;
  questions = new Array<Question>();

  constructor(private api : ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    this.api.getQuestions(this.quizId).subscribe(q => {
         this.questions = q as Question[]
         this.questions.forEach( q => {
           q.answers = [ q.correctAnswer, q.answer1, q.answer2, q.answer3 ];
           shuffle(q.answers)
         })
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  finish(){
    var correct = 0;
    this.questions.forEach(q=>{
      if ( q.selectedAnswer == q.correctAnswer)
        correct++
    })
    let dialogRef = this.dialog.open(FinishedComponent,{
      data: { correct, total: this.questions.length }
    });
  }
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
 function shuffle(a:Array<string>) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}