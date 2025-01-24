import { UserService } from '../shared/services/user.service';
import { UserValidator } from './validators/user-validator';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-async-validation',
  standalone: false,
  templateUrl: './async-validation.component.html',
  styleUrls: ['./async-validation.component.scss'],
})
export class AsyncValidationComponent {
  registerSuccess = false;

  get username() {
    return this.registerForm.get('username');
  }
  get pwd() {
    return this.registerForm.get('pwd');
  }
  constructor(private fb: NonNullableFormBuilder, private userService: UserService) {}

  registerForm = this.fb.group({
    name: [''],
    username: [
      '',
      [Validators.required, Validators.minLength(3)],
      [UserValidator.usernameValidator(this.userService)],
    ],
    pwd: ['', [Validators.required]],
    terms: [false, [Validators.requiredTrue]],
  });

  register() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.registerSuccess = true;
    }
  }
}
