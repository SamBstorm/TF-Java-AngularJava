import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component : HomeComponent},
  {path:'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path:'exo', loadChildren: () => import('./exercice/exercice.module').then(m => m.ExerciceModule)},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
