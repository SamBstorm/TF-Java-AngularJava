import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tache } from 'src/app/models/tache';
import { TodoserviceService } from '../../services/todoservice.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  public newTaskForm! : FormGroup;

  constructor(private _formBuilder : FormBuilder, private _router : Router, private _todoservice : TodoserviceService) { }

  ngOnInit(): void {
    this.newTaskForm = this._formBuilder.group({
      title : [null, Validators.required],
      description :[null,Validators.maxLength(255)],
      deadline :[null,null]
    });
  }

  public createTask(): void{
    if(this.newTaskForm.invalid) throw new Error("Soucis dans le formulaire");
    let task = new Tache(
      this.newTaskForm.controls['title'].value,
      this.newTaskForm.controls['description'].value,
      this.newTaskForm.controls['deadline'].value
    );
    console.log(task);
    
    this._todoservice.addNewTask(task);
    this._router.navigateByUrl(`/exo/todo-list`);
  }

}
