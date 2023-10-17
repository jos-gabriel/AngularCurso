import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endPointURL = 'http://localhost:3000/users';
  public userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);


  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${this.endPointURL}`;
    return this.http.get<User[]>(url);
  }

  addUser(newUser: User): Observable<User> {
    const url = `${this.endPointURL}`;
    return this.http.post<User>(url, newUser);
  }

  editUser(updatedUser: User): Observable<User> {
    const url = `${this.endPointURL}/${updatedUser.id}`;
    return this.http.put<User>(url, updatedUser);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.endPointURL}/${userId}`;
    return this.http.delete<void>(url);
  }

  notifyUserAdded() {
    // Llamar a este método cuando se agrega un usuario para notificar a los componentes interesados
    this.getUsers().subscribe((users) => {
      this.userListSubject.next(users);
    });
  }
}
