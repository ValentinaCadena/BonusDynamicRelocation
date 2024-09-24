import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ConversionFormComponent],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule
  ]
})
export class ConversionModule { }
