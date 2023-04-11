import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListaComponent } from './booking-lista/booking-lista.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookATicketComponent } from './book-aticket/book-aticket.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerComponent } from './customer/customer.component';
import { CancleTicketComponent } from './cancle-ticket/cancle-ticket.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    BookingListaComponent,
    NavbarComponent,
    BookATicketComponent,
    FooterComponent,
    AboutUsComponent,
    CustomerComponent,
    CancleTicketComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
