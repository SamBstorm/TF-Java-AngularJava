import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperationPipe } from './pipes/operation.pipe';



@NgModule({
  declarations: [
    OperationPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    OperationPipe
  ]
})
export class SharedModule { }
