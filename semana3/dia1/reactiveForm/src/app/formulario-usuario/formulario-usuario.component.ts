import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/users';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
})
export class FormularioUsuarioComponent implements OnInit {
  userForm!: FormGroup;
  user: User | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: [this.user?.name || ''],
      username: [this.user?.username || ''],
      email: [this.user?.email || ''],
      phone: [this.user?.phone || ''],
      website: [this.user?.website || ''],
      address: this.fb.group({
        street: [this.user?.address?.street || ''],
        suite: [this.user?.address?.suite || ''],
        city: [this.user?.address?.city || ''],
        zipcode: [this.user?.address?.zipcode || ''],
        geo: this.fb.group({
          lat: [this.user?.address?.geo?.lat || ''],
          lng: [this.user?.address?.geo?.lng || ''],
        }),
      }),
      company: this.fb.group({
        name: [this.user?.company?.name || ''],
        catchPhrase: [this.user?.company?.catchPhrase || ''],
        bs: [this.user?.company?.bs || ''],
      }),
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log("Formulario es valido?",this.userForm.valid )
    if (this.userForm.valid) {
      const newUser = this.userForm.value as User;

      this.userService.addUser(newUser).subscribe((user) => {
        console.log('Usuario guardado:', user);

        this.userForm.reset();
        this.userService.notifyUserAdded(); // Notificar que se agregó un usuario
      });
    }
  }
}
