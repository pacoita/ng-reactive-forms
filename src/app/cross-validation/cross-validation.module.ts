import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CrossValidationRoutingModule } from './cross-validation-routing.module';
import { CrossValidationComponent } from './cross-validation.component';
import { PackageOrderComponent } from './package-order/package-order.component';

@NgModule({
  declarations: [CrossValidationComponent, PackageOrderComponent],
  imports: [CrossValidationRoutingModule, SharedModule],
})
export class CrossValidationModule {}
