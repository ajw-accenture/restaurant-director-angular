import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOptSeatingComponent } from './service-opt-seating.component';

describe('ServiceOptSeatingComponent', () => {
  let component: ServiceOptSeatingComponent;
  let fixture: ComponentFixture<ServiceOptSeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOptSeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOptSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
