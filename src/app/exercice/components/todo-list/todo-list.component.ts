import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITache } from 'src/app/models/itache';
import { Tache } from 'src/app/models/tache';
import { TodoserviceService } from '../../services/todoservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todolist! : ITache[];

  constructor(private _router: Router, private _todoservice : TodoserviceService) { }

  ngOnInit(): void {
    this.todolist = this._todoservice.getTodoList();
  }

  public deleteTask(task :ITache) : void{
    this.todolist = this.todolist.filter(t => t !=task);
    this._todoservice.deleteTask(task.id);
  }

  public editTask(task_index : number) : void{
    this._router.navigateByUrl(`/exo/todo-edit/${task_index}`);
  }

}
