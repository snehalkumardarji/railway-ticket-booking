import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListaComponent } from './booking-lista.component';

describe('BookingListaComponent', () => {
  let component: BookingListaComponent;
  let fixture: ComponentFixture<BookingListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
