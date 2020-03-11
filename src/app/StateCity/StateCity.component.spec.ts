/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StateCityComponent } from './StateCity.component';

describe('StateCityComponent', () => {
  let component: StateCityComponent;
  let fixture: ComponentFixture<StateCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
