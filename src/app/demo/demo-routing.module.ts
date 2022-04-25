import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';

const routes: Routes = [
  {path:'', component:DemoHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
