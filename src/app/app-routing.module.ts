import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListaComponent } from './booking-lista/booking-lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/booking-form', pathMatch: 'full' },
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'booking-list', component: BookingListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }