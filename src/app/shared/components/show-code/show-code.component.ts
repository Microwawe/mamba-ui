/* eslint-disable node/no-unpublished-import */
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'custom-show-code',
	templateUrl: './show-code.component.html',
})
export class ShowCodeComponent extends BaseComponent implements AfterViewInit {
	@ViewChild('rawContent') rawContent!: ElementRef;

	isDarkTheme = false;
	rawCode = '';
	prettyCode = '';
	code = '';
	codeVisible = false;

	constructor(private el: ElementRef) {
		super();
	}

	ngAfterViewInit() {
		this.themeService.getDarkTheme().subscribe(isDark => {
			this.isDarkTheme = isDark;
		});
		this.rawCode = this.rawContent?.nativeElement?.firstChild.innerHTML;
	}

	beautifyHTML(codeStr: string, startAtLevel = 0): string {
		const div = document.createElement('div');
		let cleanedString = this.removeAngularCode(codeStr);
		cleanedString = this.removeAngularComments(cleanedString);
		//cleanedString = this.toggleDarkModeVariants(cleanedString);

		div.innerHTML = cleanedString.trim();
		return this.formatNode(div, startAtLevel).innerHTML.trim();
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

	toggleDarkModeVariants(codeStr: string) {
		console.log(this.isDarkTheme);
		return this.isDarkTheme
			? codeStr.replace(/(bg|border|placeholder|text|from|via|to)-/gm, 'dark:$1-')
			: codeStr.replace(/dark:/gm, '');
	}

	useReactSyntax(codeStr: string) {
		// TODO: SVG syntax
		return codeStr.replace(/class=/gm, 'className=');
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
		this.prettyCode = this.beautifyHTML(this.rawCode);
		this.showCode(this.prettyCode);
	}

	showReactClass() {
		let content = 'var mambaUI = React.createClass({\n';
		content += '\t render: function() {' + '\n';
		content += '\t\t return (';
		content += this.rawCode;
		content += '\n\t\t);\n';
		content += '\t}\n';
		content += '});';
		const beautified = this.beautifyHTML(content, 3);
		this.prettyCode = this.useReactSyntax(beautified);
		this.showCode(this.prettyCode, 'jsx');
	}

	showReactFunctional() {
		let content = 'const MambaUI = (props) => {\n';
		content += '\t return (\n';
		content += '\t\t' + this.beautifyHTML(this.rawCode, 2);
		content += '\n\t);\n';
		content += '});';
		this.prettyCode = this.useReactSyntax(content);
		this.showCode(this.prettyCode, 'jsx');
	}

	showVue() {
		let content = '<template>\n\t';
		content += this.beautifyHTML(this.rawCode, 1) + '\n';
		content += '</template>';
		this.prettyCode = content;
		this.showCode(this.prettyCode);
	}

	showCode(content: string, language = 'html') {
		this.code = Prism.highlight(content, Prism.languages[language], language);
		this.codeVisible = true;
	}
}
