import { BookingService } from './booking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadedBookings:Booking[];
  constructor(private bookingService:BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }


  onCancleBook(bookingId:string,slidingBooking:IonItemSliding)
  {
    slidingBooking.close();
  }
}
