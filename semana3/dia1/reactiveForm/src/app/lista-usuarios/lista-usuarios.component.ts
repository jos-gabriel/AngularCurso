import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/users';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
})
export class ListaUsuariosComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private unsubscribe: Subject<void> = new Subject<void>(); // Subject para gestionar la desuscripción de observables

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Suscripción al userListSubject del servicio UserService
    this.userService.userListSubject.pipe(takeUntil(this.unsubscribe)).subscribe(
      users => {
      this.users = users;
    });

    // Llamada inicial al servicio para obtener la lista de usuarios
    this.userService.getUsers().pipe(takeUntil(this.unsubscribe)).subscribe(
      users => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next(); // Notifica a las suscripciones que deben desuscribirse
    this.unsubscribe.complete(); // Completa el Subject para evitar fugas de memoria
  }
}
