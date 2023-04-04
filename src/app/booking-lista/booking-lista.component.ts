import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-lista.component.html',
  styleUrls: ['./booking-lista.component.css']
})
export class BookingListaComponent {
  tickets = [
    { name: 'John Doe', date: '2023-04-10', from: 'New York', to: 'Los Angeles' },
    { name: 'Jane Smith', date: '2023-04-15', from: 'Chicago', to: 'San Francisco' }
  ];
}
