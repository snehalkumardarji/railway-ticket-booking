import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListaComponent } from './booking-lista/booking-lista.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerComponent } from './customer/customer.component';
import { CancleTicketComponent } from './cancle-ticket/cancle-ticket.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
const routes: Routes = [
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'booking-list', component: BookingListaComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'customer',component: CustomerComponent},
  { path: 'cancle-ticket',component:CancleTicketComponent},
  { path: 'user-profile',component:UserProfileComponent},
  { path: '', redirectTo: '/payment', pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }