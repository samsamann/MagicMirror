import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootStoreModule } from './root-store/root-store.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
