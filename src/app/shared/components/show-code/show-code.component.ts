/* eslint-disable node/no-unpublished-import */
import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

import {BaseComponent} from '../base/base.component';
import {FullscreenModalService} from '@shared/services/fullscreen.modal.service';
import {FormatterService} from '@shared/services/formatter.service';
import {AnalyticsService} from '@shared/services/analytics.service';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {Requires} from '@shared/enum/requires.enum';
import {ThemeVariant} from '@shared/enum/theme.variant.enum';

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
	themevariant = ThemeVariant;
	options = {
		language: '',
		component: '',
		theme: ThemeVariant.light,
		color: '',
	};

	constructor(
		private modal: FullscreenModalService,
		private formatter: FormatterService,
		private analytics: AnalyticsService
	) {
		super();
	}

	ngAfterViewInit(): void {
		this.combinedSub = combineLatest([
			this.themeService.getCurrentColor(),
			this.themeService.getDarkTheme(),
		]).subscribe(([color, theme]) => {
			if (this.codeVisible) {
				this.showPreview();
			}
			this.options.color = color.name;
			this.options.theme = theme ? ThemeVariant.dark : ThemeVariant.light;
		});
		this.options.component = this.rawContent?.nativeElement?.firstChild.localName;
	}

	/**
	 * Copies the selected component's code to the clipboard. Adds/removes 'dark:' variants if the user selected the param.
	 * @param dropdownDarkTheme If the user selected light/dark theme from the dropdown when copying a component. UI theme by default.
	 */
	copyToClipboard(dropdownTheme: ThemeVariant = this.options.theme): void {
		this.copied = true;
		this.dropdownOpen = false;
		this.formatter.copyToClipboard(this.prettyCode);
		const analyticsOptions = Object.assign({}, this.options);
		analyticsOptions.theme = dropdownTheme;
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
	}

	showHtml(): void {
		this.options.language = 'html';
		this.prettyCode = this.formatter.beautifyHTML(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.theme
		);
		this.showCode(this.prettyCode);
	}

	showJSX(): void {
		this.options.language = 'jsx';
		this.prettyCode = this.formatter.beautifyHTML(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.theme
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
			this.options.theme
		);
		this.showCode(this.prettyCode);
	}

	showCode(content: string, language = 'html'): void {
		this.code = Prism.highlight(content, Prism.languages[language], language);
		this.codeVisible = true;
	}

	getRawCode(): string {
		if (this.rawContent?.nativeElement?.firstChild?.innerHTML) {
			this.rawCode = this.rawContent.nativeElement.firstChild.innerHTML;
		}
		return this.rawCode;
	}

	copyWithMode(mode: ThemeVariant): void {
		this.prettyCode = this.formatter.toggleDarkModeVariants(this.prettyCode, mode);
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
