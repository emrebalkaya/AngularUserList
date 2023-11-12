import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, FormsModule, UserListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should add a user to the list', () => {
        component.addUser('Test', 'User');
        expect(component.users.length).toBe(1);
        expect(component.users[0].firstName).toBe('Test');
        expect(component.users[0].lastName).toBe('User');
    });

    it('should not add a user if first name or last name is empty', () => {
        component.addUser('', 'User');
        expect(component.users.length).toBe(0);

        component.addUser('Test', '');
        expect(component.users.length).toBe(0);

        component.addUser('', '');
        expect(component.users.length).toBe(0);
    });

    it('should delete a user from the list', () => {
        component.users = [{ firstName: 'Test', lastName: 'User' }, { firstName: 'Test2', lastName: 'User2' }];
        component.deleteUser(1);
        expect(component.users.length).toBe(1);
        expect(component.users[0].firstName).toBe('Test');
        expect(component.users[0].lastName).toBe('User');
    });

    it('should reset the user list', () => {
        component.users = [{ firstName: 'Test', lastName: 'User' }, { firstName: 'Test2', lastName: 'User2' }];
        component.reset();
        expect(component.users.length).toBe(0);
    });

});
