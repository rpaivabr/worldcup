import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Roundof16Component } from './roundof16/roundof16.component';
import { FirstStageComponent } from './first-stage/first-stage.component';
import { QuarterFinalsComponent } from './quarter-finals/quarter-finals.component';

const routes: Routes = [
  { path: '', redirectTo: 'round-of-16', pathMatch: 'full'},
  { path: 'round-of-16', component: Roundof16Component },
  { path: 'first-stage', component: FirstStageComponent },
  { path: 'quarter-finals', component: QuarterFinalsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
