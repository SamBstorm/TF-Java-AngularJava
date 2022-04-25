import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path:'exo', loadChildren: () => import('./exercice/exercice.module').then(m => m.ExerciceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
