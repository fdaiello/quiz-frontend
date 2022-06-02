import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  authService: AuthService;

  constructor( authService: AuthService )
  { 
    this.authService = authService;
  }

  ngOnInit(): void {
  }

}
