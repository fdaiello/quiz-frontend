import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; 
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import { FinishedComponent } from './finished/finished.component';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'quizzes', component: QuizzesComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'play', component: PlayComponent},
  { path: 'playQuiz/:quizId', component: PlayQuizComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ApiService, AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
