import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
