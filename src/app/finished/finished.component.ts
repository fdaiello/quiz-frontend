import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {correct:number, total:number}) { }

  ngOnInit(): void {
  }

}
