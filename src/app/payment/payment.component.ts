import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  pass!:string;
  Cpass!:string;
  constructor(private router: Router) {}
  // pass!:string;
  // Cpass!:string;
  onSubmit() {
    if(this.pass===this.Cpass) {
    this.router.navigate(['/success']);
  }
  else {
    alert("Password is not matched. Please try again")
  }
}
}
