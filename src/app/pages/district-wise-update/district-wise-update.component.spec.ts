import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseUpdateComponent } from './district-wise-update.component';

describe('DistrictWiseUpdateComponent', () => {
  let component: DistrictWiseUpdateComponent;
  let fixture: ComponentFixture<DistrictWiseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
