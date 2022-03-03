import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cross', pathMatch: 'full' },
  {
    path: 'cross',
    loadChildren: () =>
      import('./cross-validation/cross-validation.module').then(
        (m) => m.CrossValidationModule
      ),
  },
  { path: '**', redirectTo: 'cross' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
