import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";


export class ArrayLengthValidator {
    static minArrayLength(min: number) {
        return (control: AbstractControl): ValidationErrors | null => {
            let formArray = control as FormArray;
            if (formArray.length > min) {
                return {
                    minLength: true
                }
            }
            return null;
        }
    }
}