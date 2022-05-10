import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompPaiComponent } from './comp-pai/comp-pai.component';
import { CompFilhoComponent } from './comp-pai/comp-filho/comp-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    CompPaiComponent,
    CompFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
