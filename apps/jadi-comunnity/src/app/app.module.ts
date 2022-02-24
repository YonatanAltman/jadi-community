import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiSharedLayoutModule } from '@jadi-home/shared/ui-shared-layout';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './router-app.module';
import { HelloComponent } from './hello/hello.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, SharedUiSharedLayoutModule, RouterModule.forRoot([]), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
