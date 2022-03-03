import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Factory function `equalityValidator` accepts the parameters and return another function.
export const equalityValidator = (
  firstControlName: string,
  secondControlName: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstValue = control?.get(firstControlName)?.value;
    const secondValue = control?.get(secondControlName)?.value;

    if (firstValue !== secondValue) {
      return { noMatch: true };
    }

    return null;
  };
};
