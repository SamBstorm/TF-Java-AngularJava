import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';
import { ExoShoppingComponent } from './components/exo-shopping/exo-shopping.component';

const routes: Routes = [
  {path:'', component:ExoHomeComponent},
  {path:'chrono', component : ChronoComponent},
  {path:'shopping', component : ExoShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
