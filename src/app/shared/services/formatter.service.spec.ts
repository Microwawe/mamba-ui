/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {FormatterService} from './formatter.service';

describe('Service: Formatter', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FormatterService],
		});
	});

	describe('removeEmptyClasses()', () => {
		it('should remove empty class', inject([FormatterService], (service: FormatterService) => {
			const str = '<h1 class="">The class property should disappear</h1>';
			const result = '<h1>The class property should disappear</h1>';
			expect(service.removeEmptyClasses(str)).toBe(result);
		}));

		it('should not remove valid classes', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<h1 class="bg-black">The class property should disappear</h1>';
				const result = '<h1 class="bg-black">The class property should disappear</h1>';
				expect(service.removeEmptyClasses(str)).toBe(result);
			}
		));
	});

	describe('removeEmptyWhitespace()', () => {
		it('should remove whitespace between opening and closing tags', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span> Whitespace before and after this text will be removed </span>';
				const result = '<span>Whitespace before and after this text will be removed</span>';
				expect(service.removeEmptyWhitespace(str)).toBe(result);
			}
		));

		it('should remove whitespace from child tags as well', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<h1><span> Test </span>  <span> Test </span></h1>';
				const result = '<h1><span>Test</span><span>Test</span></h1>';
				expect(service.removeEmptyWhitespace(str)).toBe(result);
			}
		));
	});

	describe('replaceColor()', () => {
		it('should replace black with white', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="bg-black"></span>';
				const result = '<span class="bg-white"></span>';
				expect(service.replaceColor(str, 'black', 'white')).toBe(result);
			}
		));

		it('should replace blue-500 with red-500', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="bg-blue-500"></span>';
				const result = '<span class="bg-red-500"></span>';
				expect(service.replaceColor(str, 'blue', 'red')).toBe(result);
			}
		));
	});

	describe('toggleDarkModeVariants()', () => {
		it('should add dark variant to bg color', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="bg-black"></span>';
				const result = '<span class="dark:bg-black"></span>';
				expect(service.toggleDarkModeVariants(str, true)).toBe(result);
			}
		));

		it('should add dark variant to border color', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="border-red-500"></span>';
				const result = '<span class="dark:border-red-500"></span>';
				expect(service.toggleDarkModeVariants(str, true)).toBe(result);
			}
		));

		it('should add dark variant to placeholder color', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="placeholder-gray-300"></span>';
				const result = '<span class="dark:placeholder-gray-300"></span>';
				expect(service.toggleDarkModeVariants(str, true)).toBe(result);
			}
		));

		it('should add dark variant to text color', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="text-white"></span>';
				const result = '<span class="dark:text-white"></span>';
				expect(service.toggleDarkModeVariants(str, true)).toBe(result);
			}
		));

		it('should add dark variant to gradient colors', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="from-gray-100 via-gray-500 to-gray-900"></span>';
				const result =
					'<span class="dark:from-gray-100 dark:via-gray-500 dark:to-gray-900"></span>';
				expect(service.toggleDarkModeVariants(str, true)).toBe(result);
			}
		));
		it('should remove dark variant when not in dark mode', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="dark:bg-black"></span>';
				const result = '<span class="bg-black"></span>';
				expect(service.toggleDarkModeVariants(str, false)).toBe(result);
			}
		));
	});
});
