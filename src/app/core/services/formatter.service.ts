import {Injectable} from '@angular/core';

@Injectable()
export class FormatterService {
	constructor() {}

	beautifyHTML(codeStr: string, startAtLevel = 0): string {
		const div = document.createElement('div');
		let cleanedString = this.removeAngularCode(codeStr);
		cleanedString = this.removeAngularComments(cleanedString);
		cleanedString = this.removeEmptyClasses(cleanedString);
		cleanedString = this.removeEmptyWhitespace(cleanedString);

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
	 * Removes Angular directives that start with "ng" from the string
	 * @param codeStr The HTML code
	 */
	removeAngularCode(codeStr: string) {
		return codeStr.replace(/[\s]*ng-[^"\s]*="[^"]*"/g, '');
	}

	/**
	 * Removes Angular binding comments for "ng-reflect-ng-if" and "ng-reflect-for-of" for example
	 * @param codeStr The HTML code
	 */
	removeAngularComments(codeStr: string) {
		return codeStr.replace(/[\s]*<!--[.\s\w=":,{}[\]-]+-->[\s]*/gm, '');
	}

	/**
	 * Removes empty class=""
	 * @param codeStr The HTML code
	 */
	removeEmptyClasses(codeStr: string) {
		return codeStr.replace(/ class=""/gm, '');
	}

	/**
	 * Removes extra whitespace between the opening and closing tags
	 * <span> Whitespace before and after this text will be removed </span>
	 * @param codeStr The HTML code
	 */
	removeEmptyWhitespace(codeStr: string) {
		return codeStr.replace(/>\s([^<]*)\s</g, '>$1<');
	}

	/**
	 * Adds or removes the 'dark:' from all the colors.
	 * @param codeStr The HTML code
	 * @param darkTheme Adds dark-variant if this is true and vice versa
	 * @returns
	 */
	toggleDarkModeVariants(codeStr: string, darkTheme: boolean) {
		return darkTheme
			? codeStr.replace(
					/(bg|border|placeholder|text|from|via|to)-(?!opacity)(black|white|transparent|\w+-\d{2,3})/gm,
					'dark:$1-$2'
			  )
			: codeStr.replace(/dark:/gm, '');
	}

	replaceColor(codeStr: string, oldColor: string, newColor: string) {
		const colorsWithOnlyOneShade: string[] = ['black', 'white', 'transparent'];

		oldColor = colorsWithOnlyOneShade.includes(oldColor)
			? '-' + oldColor
			: '-' + oldColor + '-';
		newColor = colorsWithOnlyOneShade.includes(newColor)
			? '-' + newColor
			: '-' + newColor + '-';
		return codeStr.replace(oldColor, newColor);
	}

	useReactSyntax(codeStr: string) {
		const cleanStroke = codeStr.replace(/(stroke)-[a-z]/g, prop => {
			const parts = prop.split('-');
			return parts[0] + parts[1].toUpperCase();
		});
		const cleanSVGs = cleanStroke.replace(/(fill|clip)-rule/g, prop => {
			const parts = prop.split('-');
			return parts[0] + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
		});
		const closeImgTags = cleanSVGs.replace(/<img ([^<]*)[^\/]>/g, '<img $1 />');
		const closeInputTags = closeImgTags.replace(/<input ([^<]*)[^\/]>/g, '<input $1 />');
		return closeInputTags.replace(/class=/gm, 'className=');
	}

	toVue(codeStr: string) {
		let content = '<template>\n\t';
		content += this.beautifyHTML(codeStr, 1) + '\n';
		content += '</template>';
		return content;
	}

	toReactFunctional(codeStr: string) {
		let content = 'const mambaUI = (props) => {\n';
		content += '\t return (\n';
		content += '\t\t' + this.beautifyHTML(codeStr, 2);
		content += '\n\t);\n';
		content += '});';
		return this.useReactSyntax(content);
	}

	toReactClass(codeStr: string) {
		let content = 'const mambaUI = React.createClass({\n';
		content += '\t render: function() {' + '\n';
		content += '\t\t return (';
		content += codeStr;
		content += '\n\t\t);\n';
		content += '\t}\n';
		content += '});';
		const beautified = this.beautifyHTML(content, 3);
		return this.useReactSyntax(beautified);
	}

	copyToClipboard(code: string) {
		const el = document.createElement('textarea');
		el.value = code;
		el.setAttribute('readonly', '');
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}
}
