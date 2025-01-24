import { Subject, takeUntil } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormArray, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationForm } from './model/registration-form.model';
import { RegistrationTicketForm } from './model/registration-ticket.model';

@Component({
  selector: 'app-dynamic-fields',
  standalone: false,
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFieldsComponent implements OnInit, OnDestroy {
  addressForm!: FormGroup;
  registrationForm!: FormGroup<RegistrationForm>;
  registrationTicketForm!: FormGroup<RegistrationTicketForm>;
  submitSuccess = false;
  payload = '';

  userProfiles = [{
    label: 'Student',
    value: 'student'
  },
  {
    label: 'Worker',
    value: 'worker'
  }
  ]

  constructor(private fb: NonNullableFormBuilder) { }

  // Address form fields
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

  // Registration form fields
  get name() {
    return this.registrationForm.get('name');
  }

  get userProfile() {
    return this.registrationForm.get('userProfile');
  }

  get registrationAddress() {
    return this.registrationForm.get('address');
  }

  get registrationAbroad() {
    return this.registrationForm.get('isAbroad');
  }

  // Ticket form fields
  get customerName() {
    return this.registrationTicketForm.get('name');
  }
  get companyName() {
    return this.registrationTicketForm.get('companyName');
  }
  get participants() {
    return this.registrationTicketForm.get('participants') as FormArray;
  }

  showValueCtrl = this.fb.control(false);

  private destroy$ = new Subject<boolean>();

  ngOnInit() {
    this.addressForm = this.fb.group({
      formId: [{ value: '12345', disabled: true }],
      registerForOther: [false],
      firstname: ['', Validators.required],
      lastname: [''],
      isAbroad: [false],
      abroadAddress: [{ value: '', disabled: true }, Validators.required],
      addresses: this.fb.array([this.fb.group({
        street: '',
        city: '',
      })]),
    });

    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      address: [''],
      isAbroad: [false],
      userProfile: ['']
    });

    this.registrationTicketForm = this.fb.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      jobTitle: [''],
      participants: this.fb.array([])
    });

    this.registerValueChanges();
  }

  registerValueChanges() {
    // Once we add a validator to a control we must use 
    // the same reference as the one that was originally set to remove it 
    const required = Validators.required;
    const minLength = Validators.minLength(5);
    const maxLength = Validators.maxLength(30);

    this.registerForOther?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((checked) => {
        if (checked) {
          this.firstname?.addValidators([Validators.required]);
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

    this.registrationAbroad?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((checked) => {
        checked ? this.registrationAddress?.addValidators([required, minLength]) : this.registrationAddress?.removeValidators([required, minLength]);
        this.registrationAddress?.updateValueAndValidity();
      });

    this.userProfile?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((profile) => {
        profile === 'student' ? this.registrationAddress?.addValidators([maxLength]) : this.registrationAddress?.removeValidators([maxLength]);
        this.registrationAddress?.updateValueAndValidity();
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

  newParticipant(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      jobTitle: ['']
    });
  }
  addParticipant(): void {
    const participant = this.newParticipant();
    this.participants.push(participant);
  }

  removeParticipan(i: number) {
    this.participants.removeAt(i);
  }

  submitData(form: FormGroup) {
    form.markAllAsTouched();
    if (form.valid) {
      this.payload = `
      > Using .value:
      ${JSON.stringify(form.value)}\n       
      > Using .getRawValue():
      ${JSON.stringify(form.getRawValue())}
      `;

      console.log(this.payload);

    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
