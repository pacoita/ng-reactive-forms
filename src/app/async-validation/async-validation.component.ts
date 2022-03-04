import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-async-validation',
  templateUrl: './async-validation.component.html',
  styleUrls: ['./async-validation.component.scss'],
})
export class AsyncValidationComponent {
  registerSuccess = false;

  get email() {
    return this.registerForm.get('email');
  }
  get pwd() {
    return this.registerForm.get('pwd');
  }
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group(
    {
      name: [''],
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      terms: ['', [Validators.required]],
    }
    // {
    //   validators: orderValidator,
    //   // Using a generic version
    //   //validators: equalityValidator('qty', 'qtyConfirm'),
    // }
  );

  register() {
    this.registerSuccess = true;
  }
}
