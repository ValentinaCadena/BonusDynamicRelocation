import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'conversion', 
    loadChildren: () => import('./conversion/conversion.module').then(m => m.ConversionModule) 
  },
  { path: '', redirectTo: '/conversion', pathMatch: 'full' }  // Redirección inicial opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }