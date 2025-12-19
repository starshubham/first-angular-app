import { Component, computed, Input, input, Output, EventEmitter, output } from '@angular/core';
import { type UserType } from './user.model';

// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type UserType = {
//   id: string;
//   name:  string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // // using zone.js
  // selectedUser = DUMMY_USERS[randomIndex]; 
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // // Using signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   // this.selectedUser = DUMMY_USERS[randomIndex]; // using zone.js
  //    this.selectedUser.set(DUMMY_USERS[randomIndex]); // Using signals
  // }

  // using Input decorator
  // id = input.required<string>(); // Using input function
  // @Input({required: true}) id! : string; // Using Input decorator
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // Using Output decorator
  // select = output<string>(); // Using output function

  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  // // Using input signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    // this.select.emit(this.id); // Using Output decorator
    this.select.emit(this.user.id); // Using Output decorator
    // this.select(this.id()); // Using output function
  }
}
