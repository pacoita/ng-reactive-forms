import { NgModule } from '@angular/core';

import { AsyncValidationRoutingModule } from './async-validation-routing.module';
import { AsyncValidationComponent } from './async-validation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AsyncValidationComponent],
  imports: [AsyncValidationRoutingModule, SharedModule],
})
export class AsyncValidationModule {}
