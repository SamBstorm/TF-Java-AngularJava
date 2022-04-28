import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-formulaire',
  templateUrl: './demo-formulaire.component.html',
  styleUrls: ['./demo-formulaire.component.scss']
})
export class DemoFormulaireComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private _fb : FormBuilder) {
    this.registerForm = this._fb.group(
      { lastname : [null, []],
       firstname : [null, []],
       gender : [null, []],
       birthdate : [null, []],
       email : [null, []],
       nationality : [null, []]}
    );
  }

  ngOnInit(): void {
  }

}
