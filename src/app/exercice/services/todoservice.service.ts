import { Injectable } from '@angular/core';
import { ITache } from 'src/app/models/itache';

const KEY_STORAGE : string = 'Todolist';
const KEY_INDEX_STORAGE : string = 'TodoMaxIndex';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  private _todolist : ITache[];
  private _maxIndex : number;

  constructor() {
    this._todolist = JSON.parse(localStorage.getItem(KEY_STORAGE) ?? "[]");
    this._maxIndex = parseInt(localStorage.getItem(KEY_INDEX_STORAGE) ?? "0") ;
  }

  public getTodoList() : ITache[]{
    return this._todolist;
  }

  public getTask(task_id : number) : ITache|null{
    let task = this._todolist.filter(t => t.id == task_id);
    return (task.length > 0)? task[0] : null;
  }

  public addNewTask(task : ITache) : number{
    task.id = this._maxIndex;
    this._todolist.push(task);
    this._maxIndex++;
    localStorage.setItem(KEY_STORAGE,JSON.stringify(this._todolist));
    localStorage.setItem(KEY_INDEX_STORAGE,this._maxIndex.toString());
    return task.id;
  }

  public deleteTask(task_id : number) : void{
    this._todolist = this._todolist.filter(t => t.id != task_id);
    localStorage.setItem(KEY_STORAGE,JSON.stringify(this._todolist));
  }

  public editTask(task_id : number, task : ITache) : void{
    let old_task = this.getTask(task_id);
    if(old_task == null) throw new Error("Impossible d'édtier");
    old_task.titre = task.titre;
    old_task.description = task.description;
    old_task.dateFinale = task.dateFinale;
    old_task.status = task.status;
    old_task.dateCreation = task.dateCreation;
    localStorage.setItem(KEY_STORAGE,JSON.stringify(this._todolist));
  }
}
