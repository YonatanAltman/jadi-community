import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiSharedLayoutModule } from '@jadi-home/shared/ui-shared-layout';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './router-app.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, SharedUiSharedLayoutModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
