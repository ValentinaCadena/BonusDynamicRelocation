import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent implements OnInit {

  conversionForm: FormGroup;
  physicalAddress: number | null = null;

  constructor() {
    // Definir el formulario reactivo con los campos necesarios
    this.conversionForm = new FormGroup({
      virtualAddress: new FormControl('', [Validators.required, Validators.min(0)]),
      pageSize: new FormControl('', [Validators.required, Validators.min(0)]),
      baseAddress: new FormControl('', [Validators.required, Validators.min(0)])
    }, { validators: this.virtualAddressBoundValidator() }); // Añadir validador personalizado
  }

  // Validador personalizado que devuelve una función compatible con ValidatorFn
  virtualAddressBoundValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const virtualAddress = control.get('virtualAddress')?.value;
      const pageSize = control.get('pageSize')?.value;

      if (virtualAddress !== null && pageSize !== null && virtualAddress >= pageSize) {
        return { invalidVirtualAddress: true };
      }
      return null;
    };
  }

  ngOnInit(): void {}

  // Método que se ejecutará al procesar la conversión
  convertAddress() {
    if (this.conversionForm.valid) {
      const { virtualAddress, pageSize, baseAddress } = this.conversionForm.value;

      if (virtualAddress < pageSize) {
        this.physicalAddress = this.convertVirtualToPhysical(virtualAddress, baseAddress);
        console.log("Dirección física calculada:", this.physicalAddress);
      } else {
        this.physicalAddress = null;
        console.error("Error: La dirección virtual debe ser menor que el tamaño de página.");
      }
    } else {
      this.physicalAddress = null;
    }
  }

  // Implementación simplificada de dynamic relocation
  convertVirtualToPhysical(virtualAddress: number, baseAddress: number): number {
    return baseAddress + virtualAddress;
  }

  // Manejo de mensajes de error
  getErrorMessage(controlName: string): string {
    const control = this.conversionForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('min')) {
      return 'El valor debe ser mayor o igual a 0';
    }
    if (this.conversionForm.errors?.['invalidVirtualAddress'] && controlName === 'virtualAddress') {
      return 'La dirección virtual debe ser menor que el tamaño de página';
    }
    return '';
  }

}