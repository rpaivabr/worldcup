import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterFinalsComponent } from './quarter-finals.component';

describe('QuarterFinalsComponent', () => {
  let component: QuarterFinalsComponent;
  let fixture: ComponentFixture<QuarterFinalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterFinalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterFinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
