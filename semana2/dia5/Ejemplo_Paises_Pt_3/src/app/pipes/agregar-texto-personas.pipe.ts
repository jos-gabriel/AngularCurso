import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agregarTextoPersonas'
})
export class AgregarTextoPersonasPipe implements PipeTransform {

  transform(valor: number): string {
    const formatNumber = valor.toLocaleString('es-MX', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 3,
    });
    return `${formatNumber} personas`;
  }

}
