import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  tickets: any[] = [];

  onSubmit(form: NgForm) {
    const ticket = {
      name: form.value.name,
      date: form.value.date,
      from: form.value.from,
      to: form.value.to
    };
    this.tickets.push(ticket);
    form.reset();
  }
}
