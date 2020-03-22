import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToProtectComponent } from './how-to-protect.component';

describe('HowToProtectComponent', () => {
  let component: HowToProtectComponent;
  let fixture: ComponentFixture<HowToProtectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToProtectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
