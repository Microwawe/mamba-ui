/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ColorSelectorComponent} from './color-selector.component';

describe('ColorSelectorComponent', () => {
	let component: ColorSelectorComponent;
	let fixture: ComponentFixture<ColorSelectorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ColorSelectorComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ColorSelectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
