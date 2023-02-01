import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSelectComponent } from './service-select.component';

describe('ServiceSelectComponent', () => {
  let component: ServiceSelectComponent;
  let fixture: ComponentFixture<ServiceSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
