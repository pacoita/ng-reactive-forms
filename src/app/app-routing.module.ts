import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossValidationComponent } from './cross-validation/cross-validation.component';

const routes: Routes = [
  { path: '', redirectTo: 'cross', pathMatch: 'full' },
  { path: 'cross', component: CrossValidationComponent },
  { path: '**', redirectTo: 'cross' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
