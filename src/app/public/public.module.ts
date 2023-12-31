import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { AddChildComponent } from './add-child/add-child.component';
import { ChooseChildComponent } from './choose-child/choose-child.component';
import { InfoTestComponent } from './info-test/info-test.component';

const routes: Route[] = [
  {
    path: "", redirectTo: "", pathMatch: "full"
  },
  {
    path: '', component: AppComponent
  }
  ,
  {
    path: 'Login', component: LoginComponent
  }
  ,
  {
    path: 'Signup', component: SignupComponent
  },
  {
    path: 'Aboutus', component: AboutUsPlatformComponent
  },
  {
    path: 'Aboutus_autisme_test', component: AboutUsAutismeComponent
  },
  {
    path: 'Aboutus_tdah_test', component: AboutUsTdahComponent
  },
  {
    path: 'Our_test', component: DoTestComponent
  },
  {
    path: 'Last_news', component: LastNewsComponent
  },
  {
    path: 'Autistic_question/:id', component: AutisticQuestionsComponent
  },
  {
    path: 'Tdah_question/:type_user/:id', component: TdhaQuestionsComponent
  },
  {
    path: 'choose_child', component: ChooseChildComponent
  },
  {
    path: 'add_child/:type_test', component: AddChildComponent
  },
  {
    path: 'info_test/:type_test', component: InfoTestComponent
  },

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
    AboutUsTdahComponent,
    AddChildComponent,
    ChooseChildComponent,
    InfoTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
    HttpClientModule
  ]
})
export class PublicModule { }
