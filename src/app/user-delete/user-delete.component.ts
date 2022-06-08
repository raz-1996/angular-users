import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  delete() {
    this.userService.users$.subscribe((user) => {
      user.find((e) => {
        if (this.userService.delteId === e.id) {
          this.userService.removeUserType(e.id)
        }
      })
    })
  }
}
