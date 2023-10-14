import { Injectable } from '@angular/core';
import { Prestamo } from '../modelos/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private prestamo: Prestamo[] = [
    {
      "id": 1,
      "fechaInicio": "2023-10-15",
      "fechaDevolucion": "2023-11-05",
      "usuarioPrestatario": "Usuario 1"
    },
    {
      "id": 2,
      "fechaInicio": "2023-09-20",
      "fechaDevolucion": "2023-10-10",
      "usuarioPrestatario": "Usuario 2"
    }

  ]

}
