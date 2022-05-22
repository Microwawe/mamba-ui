/* eslint-disable node/no-unpublished-import */
import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	Renderer2,
	ViewChild,
} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

import {BaseComponent} from '../base/base.component';
import {FullscreenModalService} from '@core/services/fullscreen.modal.service';
import {FormatterService} from '@core/services/formatter.service';
import {AnalyticsService} from '@core/services/analytics.service';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {Requires} from '@shared/enum/requires.enum';

@Component({
	selector: 'custom-show-code',
	templateUrl: './show-code.component.html',
})
export class ShowCodeComponent extends BaseComponent implements AfterViewInit, OnDestroy {
	@ViewChild('rawContent') rawContent!: ElementRef;
	@Input() centered = false;
	@Input() isTemplate = false;
	@Input() requires: Requires | undefined;
	combinedSub!: Subscription;
	rawCode = '';
	prettyCode = '';
	code = '';
	copied = false;
	codeVisible = false;
	dropdownOpen = false;
	options = {
		language: '',
		component: '',
		darkTheme: false,
		color: '',
	};

	constructor(
		private modal: FullscreenModalService,
		private formatter: FormatterService,
		private analytics: AnalyticsService,
		private renderer: Renderer2
	) {
		super();
	}

	ngAfterViewInit(): void {
		this.combinedSub = combineLatest([
			this.colorService.getCurrentColor(),
			this.themeService.getDarkTheme(),
		]).subscribe(([color, theme]) => {
			if (this.codeVisible) {
				this.showPreview();
			}
			this.options.color = color.name;
			this.options.darkTheme = theme;
		});
		this.options.component = this.rawContent?.nativeElement?.firstChild.localName;
		this.setShowCodeContainerHeight();
	}

	/**
	 * Dropdown components have an absolutely positioned element and the parent element
	 * ignores the height of it (= it overflows the container and is hidden because of that).
	 * We need to calculate the height of all the elements in the component and set the height of the container.
	 * This method assumes that the component has a wrapper element and inside that are the actual
	 * elements that need to be counted. Extra 32px to the height so that there is some padding-y.
	 */
	setShowCodeContainerHeight() {
		const contentHeight = Array.from<HTMLElement>(
			this.rawContent.nativeElement.firstChild.children
		)
			.flatMap((el: any) => Array.from(el.children))
			.map((el: any) => el.offsetHeight)
			.reduce((acc: number, sum: number) => acc + sum, 0);
		this.renderer.setStyle(
			this.rawContent.nativeElement,
			'min-height',
			contentHeight + 32 + 'px'
		);
		if (this.centered) {
			this.renderer.setStyle(
				this.rawContent.nativeElement,
				'padding-bottom',
				contentHeight + 'px'
			);
		}
	}

	/**
	 * Copies the selected component's code to the clipboard. Adds/removes 'dark:' variants if the user selected the param.
	 * @param dropdownDarkTheme If the user selected light/dark theme from the dropdown when copying a component. UI theme by default.
	 */
	copyToClipboard(dropdownDarkTheme: boolean = this.options.darkTheme): void {
		this.copied = true;
		this.dropdownOpen = false;
		this.formatter.copyToClipboard(this.prettyCode);
		const analyticsOptions = Object.assign({}, this.options);
		analyticsOptions.darkTheme = dropdownDarkTheme;
		this.analytics.triggerEvent(PlausibleEvent.COPY_CODE, analyticsOptions);
		setTimeout(() => {
			this.copied = false;
		}, 3000);
	}

	showPreview(): void {
		this.codeVisible = false;
		this.dropdownOpen = false;
		this.copied = false;
		this.options.language = '';
		setTimeout(() => {
			this.setShowCodeContainerHeight();
		}, 0);
	}

	showHtml(): void {
		this.options.language = 'html';
		this.prettyCode = this.formatter.beautifyHTML(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.darkTheme
		);
		this.showCode(this.prettyCode);
	}

	showJSX(): void {
		this.options.language = 'jsx';
		this.prettyCode = this.formatter.beautifyHTML(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.darkTheme
		);
		this.prettyCode = this.formatter.useReactSyntax(this.prettyCode);
		this.showCode(this.prettyCode, 'jsx');
	}

	showReactClass(): void {
		this.prettyCode = this.formatter.toReactClass(this.getRawCode());
		this.showCode(this.prettyCode, 'jsx');
	}

	showReactFunctional(): void {
		this.prettyCode = this.formatter.toReactFunctional(this.getRawCode());
		this.showCode(this.prettyCode, 'jsx');
	}

	showVue(): void {
		this.options.language = 'vue';
		this.prettyCode = this.formatter.toVue(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.darkTheme
		);
		this.showCode(this.prettyCode);
	}

	showCode(content: string, language = 'html'): void {
		this.code = Prism.highlight(content, Prism.languages[language], language);
		this.codeVisible = true;
	}

	getRawCode(): string {
		if (this.rawContent?.nativeElement?.firstChild.innerHTML) {
			this.rawCode = this.rawContent?.nativeElement?.firstChild.innerHTML;
		}
		return this.rawCode;
	}

	copyLightMode() {
		this.prettyCode = this.formatter.toggleDarkModeVariants(this.prettyCode, false);
		this.copyToClipboard();
	}

	copyDarkMode() {
		this.prettyCode = this.formatter.toggleDarkModeVariants(this.prettyCode, true);
		this.copyToClipboard();
	}

	showFullscreen(): void {
		this.modal.open(this.getRawCode());
	}

	toggleDropdown() {
		this.dropdownOpen = !this.dropdownOpen;
	}

	ngOnDestroy(): void {
		this.combinedSub.unsubscribe();
	}
}
