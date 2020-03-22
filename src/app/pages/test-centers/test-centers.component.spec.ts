import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCentersComponent } from './test-centers.component';

describe('TestCentersComponent', () => {
  let component: TestCentersComponent;
  let fixture: ComponentFixture<TestCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
