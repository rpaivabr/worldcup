import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldcupApiService } from './worldcup-api.service';
import { Roundof16Component } from './roundof16/roundof16.component';
import { AppRoutingModule } from './/app-routing.module';
import { FirstStageComponent } from './first-stage/first-stage.component';
import { QuarterFinalsComponent } from './quarter-finals/quarter-finals.component';

@NgModule({
  declarations: [
    AppComponent,
    Roundof16Component,
    FirstStageComponent,
    QuarterFinalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WorldcupApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
