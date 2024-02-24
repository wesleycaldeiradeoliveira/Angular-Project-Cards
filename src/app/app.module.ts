import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { componentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    componentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
