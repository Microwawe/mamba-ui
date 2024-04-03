/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {FormatterService} from './formatter.service';
import {ThemeVariant} from '@shared/enum/theme.variant.enum';

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
				const str =
					'<h1 class="bg-black tracking-wider">The class property should disappear</h1>';
				const result =
					'<h1 class="bg-black tracking-wider">The class property should disappear</h1>';
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

	describe('renameCustomColors()', () => {
		it('should replace custom colors', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str =
					'<span class="text-custom-dark bg-custom-light from-custom-dark to-custom-dark"></span>';
				const result =
					'<span class="text-gray-900 bg-gray-100 from-gray-900 to-gray-900"></span>';
				expect(service.renameCustomColors(str)).toBe(result);
			}
		));
	});

	describe('toggleDarkModeVariants()', () => {
		it('should add dark variants and swap color shades', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str =
					'<span class="text-gray-600 border-gray-400 ring-gray-700 ring-offset-gray-300 accent-gray-800 divide-gray-100 bg-gray-900 from-gray-50 via-gray-500 to-gray-500 outline-gray-500 decoration-gray-500 shadow-gray-500 caret-gray-500 fill-gray-500 stroke-gray-500"></span>';
				const result =
					'<span class="dark:text-gray-400 dark:border-gray-600 dark:ring-gray-300 dark:ring-offset-gray-700 dark:accent-gray-100 dark:divide-gray-800 dark:bg-gray-50 dark:from-gray-900 dark:via-gray-500 dark:to-gray-500 dark:outline-gray-500 dark:decoration-gray-500 dark:shadow-gray-500 dark:caret-gray-500 dark:fill-gray-500 dark:stroke-gray-500"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.dark)).toBe(result);
			}
		));

		it('should remove dark variants and swap color shades', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str =
					'<span class="dark:text-gray-400 dark:border-gray-600 dark:ring-gray-300 dark:ring-offset-gray-700 dark:accent-gray-100 dark:divide-gray-800 dark:bg-gray-50 dark:from-gray-900 dark:via-gray-500 dark:to-gray-500 dark:outline-gray-500 dark:decoration-gray-500 dark:shadow-gray-500 dark:caret-gray-500 dark:fill-gray-500 dark:stroke-gray-500"></span>';
				const result =
					'<span class="text-gray-600 border-gray-400 ring-gray-700 ring-offset-gray-300 accent-gray-800 divide-gray-100 bg-gray-900 from-gray-50 via-gray-500 to-gray-500 outline-gray-500 decoration-gray-500 shadow-gray-500 caret-gray-500 fill-gray-500 stroke-gray-500"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.light)).toBe(result);
			}
		));

		it('should not add dark variant to border width', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="border-t-4"></span>';
				const result = '<span class="border-t-4"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.dark)).toBe(result);
			}
		));

		it('should not add dark variant to svg fill or fill-rule', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<svg><path fill="#fff" fill-rule="evenodd"></path></svg>';
				const result = '<svg><path fill="#fff" fill-rule="evenodd"></path></svg>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.dark)).toBe(result);
			}
		));

		it('should not add dark variant to border opacity', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="border-opacity-50"></span>';
				const result = '<span class="border-opacity-50"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.dark)).toBe(result);
			}
		));

		it('should not add dark variant to placeholder opacity', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="placeholder-opacity-50"></span>';
				const result = '<span class="placeholder-opacity-50"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.dark)).toBe(result);
			}
		));

		it('should not add dark variant to text size', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="text-xl"></span>';
				const result = '<span class="text-xl"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.dark)).toBe(result);
			}
		));

		it('should remove dark variant when not in dark mode', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="dark:bg-gray-500"></span>';
				const result = '<span class="bg-gray-500"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.light)).toBe(result);
			}
		));

		it('should add both variants', inject([FormatterService], (service: FormatterService) => {
			const str =
				'<span class="text-gray-500 border-gray-500 ring-gray-500 ring-offset-gray-500 accent-gray-500 divide-gray-500 bg-gray-500 from-gray-500 via-gray-500 to-gray-500 outline-gray-500 decoration-gray-500 shadow-gray-500 caret-gray-500 fill-gray-500 stroke-gray-500"></span>';
			const result =
				'<span class="text-gray-500 dark:text-gray-500 border-gray-500 dark:border-gray-500 ring-gray-500 dark:ring-gray-500 ring-offset-gray-500 dark:ring-offset-gray-500 accent-gray-500 dark:accent-gray-500 divide-gray-500 dark:divide-gray-500 bg-gray-500 dark:bg-gray-500 from-gray-500 dark:from-gray-500 via-gray-500 dark:via-gray-500 to-gray-500 dark:to-gray-500 outline-gray-500 dark:outline-gray-500 decoration-gray-500 dark:decoration-gray-500 shadow-gray-500 dark:shadow-gray-500 caret-gray-500 dark:caret-gray-500 fill-gray-500 dark:fill-gray-500 stroke-gray-500 dark:stroke-gray-500"></span>';
			expect(service.toggleDarkModeVariants(str, ThemeVariant.both)).toBe(result);
		}));

		it('should keep pseudo-classes on both modes', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str =
					'<span class="dark:text-gray-100 hover:dark:text-indigo-400 focus-visible:dark:border-gray-300"></span>';
				const result =
					'<span class="text-gray-800 dark:text-gray-100 hover:text-indigo-600 hover:dark:text-indigo-400 focus-visible:border-gray-700 focus-visible:dark:border-gray-300"></span>';
				expect(service.toggleDarkModeVariants(str, ThemeVariant.both)).toBe(result);
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

		it('should remove angular classes', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str =
					'<form novalidate="" action="" class="ng-untouched space-y-12 tracking-wider ng-pristine ng-valid"></form>';
				const result =
					'<form novalidate="" action="" class="space-y-12 tracking-wider"></form>';
				expect(service.removeAngularClasses(str)).toBe(result);
			}
		));

		it('should not change ring-something classes', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<span class="ring-gray-500 focus:ring focus:ring-opacity-75"></span>';
				const result =
					'<span class="ring-gray-500 focus:ring focus:ring-opacity-75"></span>';
				expect(service.removeAngularCode(str)).toBe(result);
			}
		));
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

		it('should change "novalidate" to "noValidate"', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<form novalidate="" action=""></form>';
				const result = '<form noValidate="" action=""></form>';
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should change "for" to "htmlFor"', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = '<label for="email">Email</label>';
				const result = '<label htmlFor="email">Email</label>';
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

		it('should add closing slash to col elements but not colgroup', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `
				<colgroup>
					<col class="w-5">
					<col>
					<col>
					<col>
					<col>
					<col>
					<col class="w-5">
				</colgroup>`;
				const result = `
				<colgroup>
					<col className="w-5" />
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className="w-5" />
				</colgroup>`;
				expect(service.useReactSyntax(str)).toBe(result);
			}
		));

		it('should not add a closing slash to col elements if it already has one', inject(
			[FormatterService],
			(service: FormatterService) => {
				const str = `<col class="w-5" /><col />`;
				const result = `<col className="w-5" /><col />`;
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
