import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ConsultationTableComponent} from './consultation-table/consultation-table.component';
import {ChildrenTableComponent} from './children-table/children-table.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterModule} from "@angular/router";
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ConsultationTableComponent,
    ChildrenTableComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterLink
  ],
  exports: [
    ConsultationTableComponent,
    ChildrenTableComponent,
    ReactiveFormsModule,
    NgOptimizedImage,
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
