import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsyncValidationModule } from './async-validation/async-validation.module';
import { DynamicFieldsModule } from './dynamic-fields/dynamic-fields.module';
import { DynamicGenerationModule } from './dynamic-generation/dynamic-generation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AsyncValidationModule, DynamicFieldsModule, DynamicGenerationModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
