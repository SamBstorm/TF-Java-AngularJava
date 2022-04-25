import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExoHomeComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
