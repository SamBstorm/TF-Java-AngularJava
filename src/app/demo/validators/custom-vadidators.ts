import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static notAfter(date: Date): ValidatorFn {
        return (control) => {
            // retourner null si pas d"erreur
            // retourner un object si erreur

            // valeur du control
            const valueToControl = new Date(control.value);
            if(!valueToControl) 
                return null;
            if(valueToControl < date) {
                return null;
            }
            return { notafter: { maxDate: date } };
        }
    }

    static nissControl(control: AbstractControl): ValidationErrors | null{
        // valeur du control ('xx.xx. ....')
        const value = control.value;
        if(!value)
            return null;
        const cleanValue = value.replaceAll('.', '')
            .replaceAll('-', '');
        if(cleanValue.length !== 11 || !parseInt(cleanValue))
            return null;
        const left = cleanValue.slice(0,9);
        const right = cleanValue.slice(-2);

        if(97 - (left % 97) == right || 97 - ((2+left) % 97) == right) {
            return null
        }
        else {
            return { nissControl : true }
        }
    }
}