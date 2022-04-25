import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';

const routes: Routes = [
  {path:'', component:ExoHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
