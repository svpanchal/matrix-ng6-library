import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatrixNg6LibraryModule } from 'matrix-ng6-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatrixNg6LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
