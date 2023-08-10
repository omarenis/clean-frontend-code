import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ChildrenComponent } from './children/children.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import {SharedModule} from "../shared/shared.module";
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import { ChildProfileAutismeComponent } from './child-profile-autisme/child-profile-autisme.component';
import { ChildProfileTdahComponent } from './child-profile-tdah/child-profile-tdah.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: 'Children', component: ChildrenComponent
  }
]


@NgModule({
  declarations: [
    UsersComponent,
    ChildrenComponent,
    AppointmentsComponent,
    UserComponent,
    ChildProfileAutismeComponent,
    ChildProfileTdahComponent,
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class DashboardModule { }
