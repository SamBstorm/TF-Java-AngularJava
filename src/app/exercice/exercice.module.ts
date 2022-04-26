import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';
import { SharedModule } from '../shared/shared.module';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ChronoViewPipe } from './pipes/chrono-view.pipe';


@NgModule({
  declarations: [
    ExoHomeComponent,
    ChronoComponent,
    ChronoViewPipe
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
