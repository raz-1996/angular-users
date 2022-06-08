import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { bounce, bounceInLeft, bounceInRight, bounceInY, bounceOutDown, bounceOutLeft, bounceOutUp, tada, wobble } from 'ng-animate';
import { delay } from 'rxjs';
import { OpenDialogComponent } from '../open-dialog/open-dialog.component';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { UserService } from '../user-service/user.service';
import { UserType } from '../user-type/UserType';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void=>*', useAnimation(bounce)),
    ]),
    trigger('a', [
      transition('void=>*', useAnimation(bounceOutLeft)),
    ]),
    trigger('b', [
      transition('void=>*', useAnimation(wobble)),
    ]),
  ]
})

export class UserListComponent implements OnInit {
  title = 'users';
  displayedColumns: string[] = ['name', 'email', 'phone', 'add', 'delete'];

  constructor(public userService: UserService, public dialog: MatDialog) { }

  users: UserType[] = []
  loading = true

  ngOnInit() {
    this.loading = false
    this.fetchTodo()
    this.userService.users$
      .pipe(
        delay(500)
      )
      .subscribe((user) => {
        this.users = user
        this.loading = true
      })
  }

  fetchTodo() {
    this.userService.fetchUsers()
  }

  editButton(element: UserType) {
    this.userService.editUser = element
    this.dialog.open(OpenDialogComponent);
  }

  removeTodo(id: number) {
    this.userService.delteId = id
    this.dialog.open(UserDeleteComponent)
  }
}