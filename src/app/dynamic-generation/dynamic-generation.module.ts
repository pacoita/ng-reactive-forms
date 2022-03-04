import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicGenerationRoutingModule } from './dynamic-generation-routing.module';
import { DynamicGenerationComponent } from './dynamic-generation.component';


@NgModule({
  declarations: [
    DynamicGenerationComponent
  ],
  imports: [
    CommonModule,
    DynamicGenerationRoutingModule
  ]
})
export class DynamicGenerationModule { }
