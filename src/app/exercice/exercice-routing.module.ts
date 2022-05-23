import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';
import { ExoServiceComponent } from './components/exo-service/exo-service.component';
import { ExoShoppingComponent } from './components/exo-shopping/exo-shopping.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path:'', component:ExoHomeComponent},
  {path:'chrono', component : ChronoComponent},
  {path:'shopping', component : ExoShoppingComponent},
  {path:'service', component : ExoServiceComponent},
  {path:'todo-list', component : TodoListComponent},
  {path:'todo-create', component : TodoCreateComponent},
  {path:'todo-edit/:index', component : TodoEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
