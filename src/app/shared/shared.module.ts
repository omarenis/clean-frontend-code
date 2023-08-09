import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ConsultationTableComponent} from './consultation-table/consultation-table.component';
import {ChildrenTableComponent} from './children-table/children-table.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { RouterLink } from '@angular/router';


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
    RouterLink,
    HttpClientModule
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
