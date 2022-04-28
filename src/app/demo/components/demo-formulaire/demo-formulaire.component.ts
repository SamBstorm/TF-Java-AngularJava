import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-demo-formulaire',
  templateUrl: './demo-formulaire.component.html',
  styleUrls: ['./demo-formulaire.component.scss']
})
export class DemoFormulaireComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private _fb : FormBuilder) {
    this.registerForm = this._fb.group(
      //Validators.min(2), Validators.max(6) pour que le nombre soit entre 2 et 6
      { lastname : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
       firstname : [null, [Validators.required]],
       gender : ["h", [Validators.required]],
       birthdate : [null, [Validators.required]],
       email : [null, [Validators.email]],
       phone : [null, [Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]],
       nationality : [null, [Validators.required]]}
    );
  }

  ngOnInit(): void {
  }

  register(){
    //Si formulaire valide
    if(this.registerForm.valid){
      console.log("Enregistré avec succès");
      //Récupère un objet avec toutes les valeurs
      console.log(this.registerForm.value);
      //Récupère la valeur d'un champs en particulier 
      console.log(this.registerForm.value.lastname)

      //On créer l'utilisateur à ajouter en BDD
      let userToAdd : IUser = { ...this.registerForm.value, birthdate : new Date(this.registerForm.value.birthdate)};
      console.log(userToAdd);
      //On appelle le service qui contient la méthode pour ajouter un nouvel utilisateur
      //On fait une redirection vers une autre page
    }
    else {
      console.log("Erreur dans le formulaire");
      //Fonction pour marquer tous les controls comme "touchés"
      //(on est rentrés dans le champs)
      this.registerForm.markAllAsTouched();
    }
  }
}
