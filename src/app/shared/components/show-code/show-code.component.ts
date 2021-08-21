/* eslint-disable node/no-unpublished-import */
import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

import {FullscreenModalService} from '@shared/services/fullscreen.modal.service';
import {FormatterService} from '@shared/services/formatter.service';
import {BaseComponent} from '../base/base.component';
import {AnalyticsService} from '@shared/services/analytics.service';
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
	options = {
		language: '',
		component: '',
		darkTheme: false,
		color: '',
	};

	constructor(
		private modal: FullscreenModalService,
		private formatter: FormatterService,
		private analytics: AnalyticsService
	) {
		super();
	}

	ngAfterViewInit() {
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
	}

	copyToClipboard() {
		this.copied = true;
		this.formatter.copyToClipboard(this.prettyCode);
		this.analytics.triggerEvent(PlausibleEvent.COPY_CODE, this.options);
	}

	showPreview() {
		this.codeVisible = false;
		this.copied = false;
	}

	showHtml() {
		this.options.language = 'html';
		this.prettyCode = this.formatter.beautifyHTML(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.darkTheme
		);
		this.showCode(this.prettyCode);
	}

	showJSX() {
		this.options.language = 'jsx';
		this.prettyCode = this.formatter.beautifyHTML(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.darkTheme
		);
		this.prettyCode = this.formatter.useReactSyntax(this.prettyCode);
		this.showCode(this.prettyCode, 'jsx');
	}

	showReactClass() {
		this.prettyCode = this.formatter.toReactClass(this.getRawCode());
		this.showCode(this.prettyCode, 'jsx');
	}

	showReactFunctional() {
		this.prettyCode = this.formatter.toReactFunctional(this.getRawCode());
		this.showCode(this.prettyCode, 'jsx');
	}

	showVue() {
		this.options.language = 'vue';
		this.prettyCode = this.formatter.toVue(this.getRawCode());
		this.prettyCode = this.formatter.toggleDarkModeVariants(
			this.prettyCode,
			this.options.darkTheme
		);
		this.showCode(this.prettyCode);
	}

	showCode(content: string, language = 'html') {
		this.code = Prism.highlight(content, Prism.languages[language], language);
		this.codeVisible = true;
	}

	getRawCode() {
		if (this.rawContent?.nativeElement?.firstChild.innerHTML) {
			this.rawCode = this.rawContent?.nativeElement?.firstChild.innerHTML;
		}
		return this.rawCode;
	}

	showFullscreen() {
		this.modal.open(this.getRawCode());
	}

	ngOnDestroy() {
		this.combinedSub.unsubscribe();
	}
}
