import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user-service/user.service';
import { UserType } from '../user-type/UserType';



@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss']
})

export class OpenDialogComponent {
  
  constructor(private fb: FormBuilder, private userService: UserService) { }

  form = this.fb.group({
    name: [this.userService.editUser?.name, [Validators.required]],
    email: [this.userService.editUser?.email, [Validators.required, Validators.email]],
    phone: [this.userService.editUser?.phone, [Validators.required, Validators.pattern('[- +()0-9]+')]]
  })

  editUser(newUser: UserType) {
    if (this.userService.editUser) {
      this.userService.editUserData({ ...this.userService.editUser, ...newUser })
    }
  }
}
