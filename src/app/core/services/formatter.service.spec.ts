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

		it('should not add dark variant to border width', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="border-t-4"></span>';
				const result = '<span class="border-t-4"></span>';
				expect(service.toggleDarkModeVariants(str, true)).toBe(result);
			}
		));

		it('should not add dark variant to border opacity', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="border-opacity-50"></span>';
				const result = '<span class="border-opacity-50"></span>';
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

		it('should not add dark variant to placeholder opacity', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="placeholder-opacity-50"></span>';
				const result = '<span class="placeholder-opacity-50"></span>';
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

		it('should not add dark variant to text size', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="text-xl"></span>';
				const result = '<span class="text-xl"></span>';
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

	describe('removeAngularComments()', () => {
		it('should remove ngFor bindings', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `<span>
				<!-- bindings={"ng-reflect-ng-for-of": "1,2,3,4,5,6"} -->
				</span>`;
				const result = '<span></span>';
				expect(service.removeAngularComments(str)).toBe(result);
			}
		));

		it('should remove ngIf bindings', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `<span>
				<!-- bindings={"ng-reflect-ng-if": "true"} -->
				<!-- bindings={
					"ng-reflect-ng-if": "false"
				} -->
				</span>`;
				const result = '<span></span>';
				expect(service.removeAngularComments(str)).toBe(result);
			}
		));
	});

	describe('removeAngularCode()', () => {
		it('should remove curly bracket bindings', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<custom-showcase ng-reflect-title="Team"></custom-showcase>';
				const result = '<custom-showcase></custom-showcase>';
				expect(service.removeAngularCode(str)).toBe(result);
			}
		));

		it('should remove ngClass', inject([FormatterService], (service: FormatterService) => {
			const str = '<span class="text-gray-800" ng-reflect-ng-class="text-gray-800"></span>';
			const result = '<span class="text-gray-800"></span>';
			expect(service.removeAngularCode(str)).toBe(result);
		}));
	});

	describe('useReactSyntax()', () => {
		it('should change "class" to "className"', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="text-gray-800"></span>';
				const result = '<span className="text-gray-800"></span>';
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should add a closing slash to <img> and a space before the closing tag', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `<img src="https://source.unsplash.com/100x100/?portrait?1" alt="">`;
				const result = `<img src="https://source.unsplash.com/100x100/?portrait?1" alt="" />`;
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should not add a closing slash to <img> if it already has one', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `<img src="https://source.unsplash.com/100x100/?portrait?1" alt="" />`;
				const result = `<img src="https://source.unsplash.com/100x100/?portrait?1" alt="" />`;
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should not add double space before the closing tag', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `<img src="https://source.unsplash.com/100x100/?portrait?1" alt="" >`;
				const result = `<img src="https://source.unsplash.com/100x100/?portrait?1" alt="" />`;
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should add a closing slash to <input>', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<input type="text" placeholder="Add a comment..." >';
				const result = '<input type="text" placeholder="Add a comment..." />';
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should not add a closing slash to <input> if it already has one', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<input type="text" placeholder="Add a comment..." />';
				const result = '<input type="text" placeholder="Add a comment..." />';
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should add a space just before the closing input tag', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `<input type="text" placeholder="Add a comment...">`;
				const result = `<input type="text" placeholder="Add a comment..." />`;
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should change svg properties to camelCase', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str =
					'<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-5 h-5 fill-current" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" clip-rule="evenodd" d="M19 9l-7 7-7-7" /></svg>';
				const result =
					'<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5 fill-current" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" d="M19 9l-7 7-7-7" /></svg>';
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));
	});
});
