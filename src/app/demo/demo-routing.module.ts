import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoPipesComponent } from './components/demo-pipes/demo-pipes.component';
import { IntervalComponent } from './components/interval/interval.component';

const routes: Routes = [
  {path:'', component:DemoHomeComponent},
  {path:'binding', component:DemoBindingComponent},
  {path:'pipe', component:DemoPipesComponent},
  {path:'interval', component:IntervalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
