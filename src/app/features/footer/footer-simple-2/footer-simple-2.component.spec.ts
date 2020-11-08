/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterSimple-2Component } from './footer-simple-2.component';

describe('FooterSimple-2Component', () => {
  let component: FooterSimple-2Component;
  let fixture: ComponentFixture<FooterSimple-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSimple-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSimple-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
