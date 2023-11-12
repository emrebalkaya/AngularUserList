import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserListComponent, FormsModule],
  template: `
  <h1 class="text-center bg-secondary-subtle">Angular User Management</h1>
  <app-user-list></app-user-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amatis';
}
