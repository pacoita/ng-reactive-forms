import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossValidationComponent } from './cross-validation.component';

const routes: Routes = [{ path: '', component: CrossValidationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrossValidationRoutingModule {}
