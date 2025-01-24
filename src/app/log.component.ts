import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-log',
  standalone: false,
  template: `
  <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
    <mat-form-field class="full-width" appearance="outline">
      <mat-label>Username</mat-label>
      <input matInput [(ngModel)]="model.username" name="username">
    </mat-form-field>
  
    <mat-form-field class="full-width" appearance="outline">
      <mat-label>Password</mat-label>
      <input matInput type="password" [(ngModel)]="model.password" name="password">
    </mat-form-field>
    
    <button mat-raised-button type="submit">Login</button>
    <br>
    <pre>After pressing the login button, open your browser console to see the form's value.</pre>
  </form>
  `
})
export class LogComponent {
  @ViewChild('loginForm') form: any;

  // Form model with two empty string properties
  model = {
    username: 'Francesco', 
    password: ''
  };

  onSubmit() {
    console.log('Form value: ', this.form.value);
  }
}