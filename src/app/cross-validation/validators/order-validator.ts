import { ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
export const orderValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const qty = control.get('qty')?.value;
  const qtyConfirm = control.get('qtyConfirm')?.value;

  if (qty !== qtyConfirm) {
    return { noMatch: true };
  }

  return null;
};
