import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatlocationsComponent } from './matlocations.component';

describe('MatlocationsComponent', () => {
  let component: MatlocationsComponent;
  let fixture: ComponentFixture<MatlocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatlocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
