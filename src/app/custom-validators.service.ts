import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  public minimumAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const today = new Date();
      const dateOfBirth = new Date(control.value);
      const diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime())
      const diffYear = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;

      if (diffYear >= minAge) {
        return null;
      }
      else {
        return { minAge: { valid: false } };
      }

    }
  }
  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      if (!(formGroup.get(controlToValidate) as FormControl).value)
        return null; //return, if the confirm password is null

      if ((formGroup.get(controlToValidate) as FormControl).value == (formGroup.get(controlToCompare) as any).value)
        return null; //valid
      else {
        (formGroup.get(controlToValidate) as FormControl).setErrors({ compareValidator: { valid: false } });
        return { compareValidator: { valid: false } }; //invalid
      }
    };
  }
}
