import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverynotedetailsComponent } from './deliverynotedetails.component';

describe('DeliverynotedetailsComponent', () => {
  let component: DeliverynotedetailsComponent;
  let fixture: ComponentFixture<DeliverynotedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverynotedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverynotedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
