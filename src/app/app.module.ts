import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFileUploaderModule } from 'projects/ng-gil-uploader/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
