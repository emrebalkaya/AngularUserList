import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  firstName: string = '';
  lastName: string = '';

  users: { firstName: string; lastName: string }[] = [];

  addUser(firstName: string, lastName: string) {
    if (firstName != '' && lastName != '') {
      this.users.push({ firstName, lastName });
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  reset() {
    this.users.length = 0;
  }
}
