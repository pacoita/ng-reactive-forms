import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFieldsComponent } from './dynamic-fields.component';

const routes: Routes = [{ path: '', component: DynamicFieldsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFieldsRoutingModule {}
