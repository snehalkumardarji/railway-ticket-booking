import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;

  onSubmit() {
    // TODO: Implement save changes logic
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Phone Number:', this.phone);
  }
}
