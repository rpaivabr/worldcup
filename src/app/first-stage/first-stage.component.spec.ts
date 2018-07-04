import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStageComponent } from './first-stage.component';

describe('FirstStageComponent', () => {
  let component: FirstStageComponent;
  let fixture: ComponentFixture<FirstStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
