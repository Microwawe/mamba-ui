import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';
// eslint-disable-next-line node/no-unpublished-import
import * as Prism from 'prismjs';
import {Observable} from 'rxjs/internal/Observable';
import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'custom-show-code',
	templateUrl: './show-code.component.html',
})
export class ShowCodeComponent extends BaseComponent implements AfterViewInit {
	@Input() language = 'html';
	@ViewChild('rawContent') rawContent!: ElementRef;

	isDarkTheme!: Observable<boolean>;
	rawCode = '';
	code = '';
	codeVisible = false;

	constructor(private el: ElementRef, private themeService: ThemeService) {
		super();
	}

	ngAfterViewInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
		const content = this.rawContent?.nativeElement?.firstChild.innerHTML;
		const grammar = Prism.languages[this.language];
		setTimeout(() => {
			const cleanHtml = this.beautifyHTML(content);
			this.code = Prism.highlight(cleanHtml, grammar, this.language);
		}, 0);
	}

	beautifyHTML(codeStr: string) {
		const div = document.createElement('div');
		let cleanedString = this.removeAngularCode(codeStr);
		cleanedString = this.removeAngularComments(cleanedString);
		div.innerHTML = cleanedString.trim();
		return this.formatNode(div, 0).innerHTML.trim();
	}

	formatNode(node: any, level: number) {
		const indentBefore = level > 0 ? '\t'.repeat(level) : '';
		const indentAfter = indentBefore.substr(1);
		let textNode;

		for (let i = 0; i < node.children.length; i++) {
			level++;
			textNode = document.createTextNode('\n' + indentBefore);
			node.insertBefore(textNode, node.children[i]);

			this.formatNode(node.children[i], level);

			if (node.lastElementChild === node.children[i]) {
				textNode = document.createTextNode('\n' + indentAfter);
				node.appendChild(textNode);
			} else {
				level--;
			}
		}

		return node;
	}

	/**
	 * Removes Angular directives that start with "_ng" or "ng" from the string
	 * @param codeStr The code
	 */
	removeAngularCode(codeStr: string) {
		// removes parts that start with "_ng"
		return codeStr.replace(/ng-[^"\s]*="[^"]*"/g, '');
	}

	/**
	 * Removes Angular binding comments for "ng-reflect-ng-if" and "ng-reflect-for-of" for example
	 * @param codeStr The code
	 */
	removeAngularComments(codeStr: string) {
		return codeStr.replace(/<!--[.\s\w=":,{}[\]-]+-->/gm, '');
	}

	copyToClipboard() {
		const el = document.createElement('textarea');
		el.value = this.rawCode;
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
		this.rawCode = '';
		this.codeVisible = false;
	}

	showCode() {
		this.rawCode = this.beautifyHTML(this.rawContent.nativeElement.firstChild.innerHTML);
		this.codeVisible = true;
	}
}
