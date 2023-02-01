import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceSelectComponent } from './service-select/service-select.component';
import { ServiceOptSeatingComponent } from './service-opt-seating/service-opt-seating.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceSelectComponent,
    ServiceOptSeatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
