import { NgModule } from '@angular/core';

import { DynamicFieldsRoutingModule } from './dynamic-fields-routing.module';
import { DynamicFieldsComponent } from './dynamic-fields.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DynamicFieldsComponent],
  imports: [SharedModule, DynamicFieldsRoutingModule],
})
export class DynamicFieldsModule {}
