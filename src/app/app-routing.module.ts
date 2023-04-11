import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListaComponent } from './booking-lista/booking-lista.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerComponent } from './customer/customer.component';
import { CancleTicketComponent } from './cancle-ticket/cancle-ticket.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'booking-list', component: BookingListaComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'customer',component: CustomerComponent},
  { path: 'cancle-ticket',component:CancleTicketComponent},
  { path: 'user-profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }