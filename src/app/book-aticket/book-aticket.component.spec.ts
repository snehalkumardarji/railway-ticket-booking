import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookATicketComponent } from './book-aticket.component';

describe('BookATicketComponent', () => {
  let component: BookATicketComponent;
  let fixture: ComponentFixture<BookATicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookATicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookATicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
