import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';

const routes: Routes = [
  { path: '', component: ConversionFormComponent }  // Ruta base del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionRoutingModule { }
