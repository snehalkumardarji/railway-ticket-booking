import { Component } from '@angular/core';

@Component({
  selector: 'app-cancle-ticket',
  templateUrl: './cancle-ticket.component.html',
  styleUrls: ['./cancle-ticket.component.css']
})
export class CancleTicketComponent {
  pnr!: string;
  email!: string;
  phone!: string;

  onSubmit() {
    // TODO: Implement cancel ticket logic
    console.log('PNR Number:', this.pnr);
    console.log('Email:', this.email);
    console.log('Phone Number:', this.phone);
  }
}
