/* eslint-disable node/no-unpublished-import */
import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {FormatterService} from '@core/services/formatter.service';
import {FullscreenModalService} from '@core/services/fullscreen.modal.service';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import {Subscription} from 'rxjs';
import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'custom-show-code',
	templateUrl: './show-code.component.html',
})
export class ShowCodeComponent extends BaseComponent implements AfterViewInit, OnDestroy {
	@ViewChild('rawContent') rawContent!: ElementRef;
	@Input() isComponent = false;
	@Input() isTemplate = false;
	themeSub!: Subscription;
	isDarkTheme = false;
	rawCode = '';
	prettyCode = '';
	code = '';
	copied = false;
	codeVisible = false;
	selectedLanguage = '';
	selectedComponent = '';

	constructor(private modal: FullscreenModalService, private formatter: FormatterService) {
		super();
	}

	ngAfterViewInit() {
		this.themeSub = this.themeService.getDarkTheme().subscribe(isDark => {
			this.isDarkTheme = isDark;
		});
		this.rawCode = this.rawContent?.nativeElement?.firstChild.innerHTML;
		this.selectedComponent = this.rawContent?.nativeElement?.firstChild.localName;
	}

	copyToClipboard() {
		this.copied = true;
		this.formatter.copyToClipboard(
			this.prettyCode,
			this.selectedComponent,
			this.selectedLanguage
		);
	}

	showPreview() {
		this.codeVisible = false;
		this.copied = false;
	}

	showHtml() {
		this.selectedLanguage = 'html';
		this.prettyCode = this.formatter.beautifyHTML(this.rawCode);
		this.showCode(this.prettyCode);
	}

	showJSX() {
		this.selectedLanguage = 'jsx';
		this.prettyCode = this.formatter.beautifyHTML(this.rawCode);
		this.showCode(this.formatter.useReactSyntax(this.prettyCode), 'jsx');
	}

	showReactClass() {
		this.prettyCode = this.formatter.toReactClass(this.rawCode);
		this.showCode(this.prettyCode, 'jsx');
	}

	showReactFunctional() {
		this.prettyCode = this.formatter.toReactFunctional(this.rawCode);
		this.showCode(this.prettyCode, 'jsx');
	}

	showVue() {
		this.selectedLanguage = 'vue';
		this.prettyCode = this.formatter.toVue(this.rawCode);
		this.showCode(this.prettyCode);
	}

	showCode(content: string, language = 'html') {
		this.code = Prism.highlight(content, Prism.languages[language], language);
		this.codeVisible = true;
	}

	showFullscreen() {
		this.modal.open(this.rawCode);
	}

	ngOnDestroy() {
		this.themeSub.unsubscribe();
	}
}
