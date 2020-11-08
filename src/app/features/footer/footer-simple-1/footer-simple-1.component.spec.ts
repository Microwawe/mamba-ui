/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterSimple-1Component } from './footer-simple-1.component';

describe('FooterSimple-1Component', () => {
  let component: FooterSimple-1Component;
  let fixture: ComponentFixture<FooterSimple-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSimple-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSimple-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
