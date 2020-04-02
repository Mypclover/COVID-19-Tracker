import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAlertComponent } from './travel-alert.component';

describe('TravelAlertComponent', () => {
  let component: TravelAlertComponent;
  let fixture: ComponentFixture<TravelAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
