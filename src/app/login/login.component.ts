import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  authService: AuthService

  constructor(authService: AuthService, private formBuilder: FormBuilder)
  {
    this.form = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService = authService
  }

  ngOnInit(): void {
  }

}
