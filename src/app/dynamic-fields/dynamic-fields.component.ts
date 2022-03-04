import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFieldsComponent {
  constructor(private fb: FormBuilder) {}

  get firstname() {
    return this.addressForm.get('firstname');
  }
  get lastname() {
    return this.addressForm.get('lastname');
  }
  get addresses() {
    return this.addressForm.get('addresses') as FormArray;
  }

  showValueCtrl = this.fb.control(false);

  addressForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    addresses: this.fb.array([]),
  });

  newAddress(): FormGroup {
    return this.fb.group({
      street: '',
      city: '',
    });
  }
  addAddress(): void {
    const emptyAddress = this.newAddress();
    this.addresses.push(emptyAddress);
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }
}
