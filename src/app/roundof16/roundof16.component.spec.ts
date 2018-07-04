import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roundof16Component } from './roundof16.component';

describe('Roundof16Component', () => {
  let component: Roundof16Component;
  let fixture: ComponentFixture<Roundof16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roundof16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roundof16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
