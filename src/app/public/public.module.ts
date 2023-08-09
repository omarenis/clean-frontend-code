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
import { AboutUsPlatformComponent } from './about-us/about-us-platform/about-us-platform.component';
import { AboutUsAutismeComponent } from './about-us/about-us-autisme/about-us-autisme.component';
import { AboutUsTdahComponent } from './about-us/about-us-tdah/about-us-tdah.component';

const routes: Route[] = [
  {
    path: "", redirectTo: "index", pathMatch: "full"
  },
  {
    path: 'index', component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DoTestComponent,
    LastNewsComponent,
    LoginComponent,
    SignupComponent,
    TdhaQuestionsComponent,
    AutisticQuestionsComponent,
    AboutUsPlatformComponent,
    AboutUsAutismeComponent,
    AboutUsTdahComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ]
})
export class PublicModule { }
