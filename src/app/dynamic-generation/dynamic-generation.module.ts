import { NgModule } from '@angular/core';

import { DynamicGenerationRoutingModule } from './dynamic-generation-routing.module';
import { DynamicGenerationComponent } from './dynamic-generation.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DynamicGenerationComponent],
  imports: [SharedModule, DynamicGenerationRoutingModule, HttpClientModule],
})
export class DynamicGenerationModule {}
