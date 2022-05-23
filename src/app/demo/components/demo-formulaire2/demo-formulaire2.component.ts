import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/custom-vadidators';


@Component({
  selector: 'app-demo-formulaire2',
  templateUrl: './demo-formulaire2.component.html',
  styleUrls: ['./demo-formulaire2.component.scss']
})
export class DemoFormulaire2Component implements OnInit {

  form!: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      /** [valeur par defaut, [validateurs]] */
      dateNaissance: [null, [
        Validators.required,
        CustomValidators.notAfter(new Date()),
      ]],
      /** xx.xx.xx-xxx.xx */ //97 - (a%97) = b
      regNat: [null, [
        Validators.required, // est de type ValidatorFn
        Validators.pattern(/[0-9]{2}.[0-9]{2}.[0-9]{2}-[0-9]{3}.[0-9]{2}/g),
        CustomValidators.nissControl
      ]],
    });

  }

}
