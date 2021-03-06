import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';
import { SharedModule } from '../shared/shared.module';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ChronoViewPipe } from './pipes/chrono-view.pipe';
import { ExoShoppingComponent } from './components/exo-shopping/exo-shopping.component';
import { ShoppingListComponent } from './components/exo-shopping/shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { ExoServiceComponent } from './components/exo-service/exo-service.component';
import { ShowlistComponent } from './components/exo-service/showlist/showlist.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';


@NgModule({
  declarations: [
    ExoHomeComponent,
    ChronoComponent,
    ChronoViewPipe,
    ExoShoppingComponent,
    ShoppingListComponent,
    ExoServiceComponent,
    ShowlistComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
  ]
})
export class ExerciceModule { }
