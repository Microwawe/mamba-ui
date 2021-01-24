/* eslint-disable node/no-unpublished-import */
import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {FormatterService} from '@shared/services/formatter.service';
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
	@Input() centered = false;
	themeSub!: Subscription;
	isDarkTheme = false;
	rawCode = '';
	prettyCode = '';
	code = '';
	codeVisible = false;

	constructor(protected el: ElementRef, private formatter: FormatterService) {
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

	ngOnDestroy() {
		this.themeSub.unsubscribe();
	}
}
