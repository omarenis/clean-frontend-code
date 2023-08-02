import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ChildrenComponent } from './children/children.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ChildComponent } from './child/child.component';
import {SharedModule} from "../shared/shared.module";
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UsersComponent,
    ChildrenComponent,
    AppointmentsComponent,
    ChildComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    FormsModule
  ]
})
export class DashboardModule { }
