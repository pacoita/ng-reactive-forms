import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsyncValidationModule } from './async-validation/async-validation.module';
import { DynamicFieldsModule } from './dynamic-fields/dynamic-fields.module';
import { DynamicGenerationModule } from './dynamic-generation/dynamic-generation.module';
import { LogComponent } from './log.component';
import { FormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

@NgModule({
  declarations: [AppComponent, LogComponent],
  imports: [BrowserModule, AppRoutingModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, FormsModule, AsyncValidationModule, DynamicFieldsModule, DynamicGenerationModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
