import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  tickets: any[] = [];
  name!:string;
  email!: string;
  pnum!:number;
  date!:string;
  from!:string;
  to!: string;
  addTicket() {
    this.tickets.push({id:this.tickets.length,name:this.name,email:this.email,pnum:this.pnum,date:this.date,from:this.from,to:this.to});
    // form.reset();
  }
  cancleTicket(id:number) {
    this.tickets = this.tickets.filter(item=>item.id!=id);
  }
}
