import { Subject, takeUntil } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFieldsComponent implements OnInit, OnDestroy {
  addressForm!: FormGroup;
  submitSuccess = false;
  payload = '';

  constructor(private fb: FormBuilder) {}

  get registerForOther() {
    return this.addressForm.get('registerForOther');
  }
  get firstname() {
    return this.addressForm.get('firstname');
  }
  get lastname() {
    return this.addressForm.get('lastname');
  }
  get isAbroad() {
    return this.addressForm.get('isAbroad');
  }
  get abroadAddress() {
    return this.addressForm.get('abroadAddress');
  }
  get addresses() {
    return this.addressForm.get('addresses') as FormArray;
  }

  showValueCtrl = this.fb.control(false);

  private destroy$ = new Subject<boolean>();

  ngOnInit() {
    this.addressForm = this.fb.group({
      formId: [{ value: '12345', disabled: true }],
      registerForOther: [false],
      firstname: [''],
      lastname: [''],
      isAbroad: [false],
      abroadAddress: [{ value: '', disabled: true }, Validators.required],
      addresses: this.fb.array([]),
    });

    this.registerValueChanges();
  }

  registerValueChanges() {
    this.registerForOther?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((checked) => {
        if (checked) {
          this.firstname?.setValidators([Validators.required]);
          this.lastname?.setValidators([Validators.required]);
        } else {
          this.firstname?.removeValidators([Validators.required]);
          this.lastname?.removeValidators([Validators.required]);
        }
        this.firstname?.updateValueAndValidity();
        this.lastname?.updateValueAndValidity();
      });

    this.isAbroad?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((checked) => {
        checked ? this.abroadAddress?.enable() : this.abroadAddress?.disable();
      });
  }

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

  submitData() {
    if (this.addressForm.valid) {
      this.payload = `
      > Using .value:
      ${JSON.stringify(this.addressForm.value)}\n       
      > Using .getRawValue():
      ${JSON.stringify(this.addressForm.getRawValue())}
      `;

      console.log(this.payload);
      
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
