import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CrossValidationRoutingModule } from './cross-validation-routing.module';
import { CrossValidationComponent } from './cross-validation.component';

@NgModule({
  declarations: [CrossValidationComponent],
  imports: [CrossValidationRoutingModule, SharedModule],
})
export class CrossValidationModule {}
