import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancleTicketComponent } from './cancle-ticket.component';

describe('CancleTicketComponent', () => {
  let component: CancleTicketComponent;
  let fixture: ComponentFixture<CancleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancleTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
