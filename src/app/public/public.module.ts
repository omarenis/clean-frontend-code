import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { DoTestComponent } from './do-test/do-test.component';
import { LastNewsComponent } from './last-news/last-news.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TdhaQuestionsComponent } from './tdha-questions/tdha-questions.component';
import { AutisticQuestionsComponent } from './autistic-questions/autistic-questions.component';
import {SharedModule} from "../shared/shared.module";
import { Route, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DoTestComponent,
    LastNewsComponent,
    LoginComponent,
    SignupComponent,
    TdhaQuestionsComponent,
    AutisticQuestionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),


  ]
})
export class PublicModule { }
