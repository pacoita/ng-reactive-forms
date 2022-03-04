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
  {
    path: 'async',
    loadChildren: () =>
      import('./async-validation/async-validation.module').then(
        (m) => m.AsyncValidationModule
      ),
  },
  {
    path: 'dynamic',
    loadChildren: () =>
      import('./dynamic-fields/dynamic-fields.module').then(
        (m) => m.DynamicFieldsModule
      ),
  },
  {
    path: 'dynamic-generation',
    loadChildren: () =>
      import('./dynamic-generation/dynamic-generation.module').then(
        (m) => m.DynamicGenerationModule
      ),
  },
  { path: '**', redirectTo: 'cross' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
