import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuario: Usuario [] = [
    {
      "id": 1,
      "nombreCompleto": "Nombre 1",
      "usuario": "Usuario1",
      "numeroTelefonico": "123-456-7890"
    },
    {
      "id": 2,
      "nombreCompleto": "Nombre 2",
      "usuario": "Usuario2",
      "numeroTelefonico": "987-654-3210"
    }

  ]

}
