import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route} from "@angular/router";
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {RouterModule} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

const routes: Route[] = [{
  path: '', component: AppComponent, children: [
    {
      path: 'public', loadChildren: () => import('./public/public.module').then((module) => module.PublicModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule)
    }
  ]
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
