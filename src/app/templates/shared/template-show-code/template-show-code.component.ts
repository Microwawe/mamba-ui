import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';
import {FormatterService} from '@shared/services/formatter.service';
/* eslint-disable node/no-unpublished-import */
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import {Subscription} from 'rxjs';

import {TemplateModalService} from '../template-fullscreen-modal/template-modal.service';

@Component({
	selector: 'custom-template-show-code',
	templateUrl: './template-show-code.component.html',
})
export class TemplateShowCodeComponent extends BaseComponent implements AfterViewInit, OnDestroy {
	@ViewChild('rawContent') rawContent!: ElementRef;
	themeSub!: Subscription;
	isDarkTheme = false;
	rawCode = '';
	prettyCode = '';
	code = '';
	codeVisible = false;

	constructor(
		private el: ElementRef,
		private templateModal: TemplateModalService,
		private formatter: FormatterService
	) {
		super();
	}

	ngAfterViewInit() {
		this.themeSub = this.themeService.getDarkTheme().subscribe(isDark => {
			this.isDarkTheme = isDark;
		});
		this.rawCode = this.rawContent?.nativeElement?.firstChild.innerHTML;
	}

	copyToClipboard() {
		const el = document.createElement('textarea');
		el.value = this.prettyCode;
		el.setAttribute('readonly', '');
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		alert('COPIED');
	}

	showPreview() {
		this.codeVisible = false;
	}

	showHtml() {
		this.prettyCode = this.formatter.beautifyHTML(this.rawCode);
		this.showCode(this.prettyCode);
	}

	showJSX() {
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
		this.prettyCode = this.formatter.toVue(this.rawCode);
		this.showCode(this.prettyCode);
	}

	showCode(content: string, language = 'html') {
		this.code = Prism.highlight(content, Prism.languages[language], language);
		this.codeVisible = true;
	}

	showFullscreen() {
		this.templateModal.open(this.rawCode);
	}

	ngOnDestroy() {
		this.themeSub.unsubscribe();
	}
}
