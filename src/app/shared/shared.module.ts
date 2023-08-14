import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ConsultationTableComponent} from './consultation-table/consultation-table.component';
import {ChildrenTableComponent} from './children-table/children-table.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { Route, RouterLink, RouterModule } from '@angular/router';
import { ChildProfileAutismComponent } from './child-profile-autism/child-profile-autism.component';
import { ChildProfileTDAHComponent } from './child-profile-tdah/child-profile-tdah.component';


const routes: Route[] = [
  {
    path: 'Profile', component:ProfileComponent
  },
  {
    path: 'Profile/:id', component:ProfileComponent
  },
  {
    path: 'Profile/autism/:id', component:ChildProfileAutismComponent
  },
  {
    path: 'Profile/tdah/:id', component:ChildProfileTDAHComponent
  },
]


@NgModule({
  declarations: [
    ConsultationTableComponent,
    ChildrenTableComponent,
    ProfileComponent,
    ChildProfileAutismComponent,
    ChildProfileTDAHComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterLink,
    HttpClientModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    ConsultationTableComponent,
    ChildrenTableComponent,
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
