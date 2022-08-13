import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
export const orderValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const qty = control.get('qty')?.value;
  const qtyConfirm = control.get('qtyConfirm')?.value;

  if (qty !== qtyConfirm) {
    return { noMatch: true };
  }

  return null;
};

export function packageValidator(form: AbstractControl): ValidationErrors | null {
  const qty = form.get('qty')?.value;
  const packageSelected = form.get('packageType')?.value;

  // pack1 - standard
  // pack2 - wooden box -> Order >= 2KG
  // pack3 - metal  box -> Order >= 5KG

  if (qty < 1 || (qty < 2 && packageSelected === 'pack2') || (qty < 5 && packageSelected === 'pack3')) {
    return { invalidPackage: true };
  }

  return null;
};
