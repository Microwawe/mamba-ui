import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class FormatterService {
	constructor() {}

	beautifyHTML(codeStr: string, startAtLevel = 0): string {
		const div = document.createElement('div');
		let cleanedString = this.removeAngularCode(codeStr);
		cleanedString = this.removeAngularComments(cleanedString);
		cleanedString = this.removeAngularClasses(cleanedString);
		cleanedString = this.removeEmptyClasses(cleanedString);
		cleanedString = this.removeEmptyWhitespace(cleanedString);

		div.innerHTML = cleanedString.trim();
		return this.formatNode(div, startAtLevel).innerHTML.trim();
	}

	formatNode(node: any, level: number): any {
		const indentBefore = level > 0 ? '\t'.repeat(level) : '';
		const indentAfter = indentBefore.substring(1);
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
	removeAngularCode(codeStr: string): string {
		return codeStr.replace(/[\s]*ng-[^"\s]*="[^"]*"/gm, '');
	}

	/**
	 * Removes Angular's css-classes that start with "ng" from the string
	 * @param codeStr The HTML code
	 */
	removeAngularClasses(codeStr: string): string {
		return codeStr.replace(/[\s]*ng-[^"\s]*/gm, '');
	}

	/**
	 * Removes Angular binding comments for "ng-reflect-ng-if" and "ng-reflect-for-of" for example
	 * @param codeStr The HTML code
	 */
	removeAngularComments(codeStr: string): string {
		return codeStr.replace(/[\s]*<!--[.\s\w=":,{}[\]-]*-->[\s]*/gm, '');
	}

	/**
	 * Removes empty class=""
	 * @param codeStr The HTML code
	 */
	removeEmptyClasses(codeStr: string): string {
		return codeStr.replace(/ class=""/gm, '');
	}

	/**
	 * Removes extra whitespace between the opening and closing tags
	 * <span> Whitespace before and after this text will be removed </span>
	 * @param codeStr The HTML code
	 */
	removeEmptyWhitespace(codeStr: string): string {
		return codeStr.replace(/>\s([^<]*)\s</g, '>$1<');
	}

	/**
	 * Adds or removes the 'dark:' from all the colors.
	 * @param codeStr The HTML code
	 * @param darkTheme Adds dark-variant if this is true and vice versa
	 * @returns
	 */
	toggleDarkModeVariants(codeStr: string, darkTheme: boolean): string {
		return darkTheme
			? codeStr.replace(
					/(bg|border|placeholder|text|from|via|to|ring|ring-offset|accent|divide|outline|decoration|shadow|caret|fill|stroke)-(?!opacity)(black|white|transparent|\w+-\d{2,3})/gm,
					'dark:$1-$2'
			  )
			: codeStr.replace(/dark:/gm, '');
	}

	replaceColor(codeStr: string, oldColor: string, newColor: string): string {
		const colorsWithOnlyOneShade: string[] = ['black', 'white', 'transparent', 'current'];

		oldColor = colorsWithOnlyOneShade.includes(oldColor)
			? '-' + oldColor
			: '-' + oldColor + '-';
		newColor = colorsWithOnlyOneShade.includes(newColor)
			? '-' + newColor
			: '-' + newColor + '-';
		return codeStr.replace(oldColor, newColor);
	}

	useReactSyntax(codeStr: string): string {
		const reactSyntax = codeStr
			.replace(/(stroke)-[a-z]/g, prop => {
				const parts = prop.split('-');
				return parts[0] + parts[1].toUpperCase();
			})
			.replace(/(fill|clip)-rule/g, prop => {
				const parts = prop.split('-');
				return parts[0] + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
			})
			.replace(/<img ([^<]*[^/\s])[\s]?>/g, '<img $1 />')
			.replace(/<input ([^<]*[^/\s])[\s]?>/g, '<input $1 />')
			.replace(/<area([^<]*[^/\s])[\s]?>/g, '<area $1 />')
			.replace(/<base([^<]*[^/\s])[\s]?>/g, '<base $1 />')
			.replace(/<br([^<]*[^/\s])[\s]?>/g, '<br $1 />')
			.replace(/<col[^group]([^<]*[^/\s])[\s]?>/g, '<col $1 />')
			.replace(/<col>/g, '<col />')
			.replace(/<embed([^<]*[^/\s])[\s]?>/g, '<embed $1 />')
			.replace(/<hr([^<]*[^/\s])[\s]?>/g, '<hr $1 />')
			.replace(/<link([^<]*[^/\s])[\s]?>/g, '<link $1 />')
			.replace(/<meta([^<]*[^/\s])[\s]?>/g, '<meta $1 />')
			.replace(/<param([^<]*[^/\s])[\s]?>/g, '<param $1 />')
			.replace(/<source([^<]*[^/\s])[\s]?>/g, '<source $1 />')
			.replace(/<track([^<]*[^/\s])[\s]?>/g, '<track $1 />')
			.replace(/<wbr([^<]*[^/\s])[\s]?>/g, '<wbr />')
			.replace(/class=/gm, 'className=');
		return reactSyntax;
	}

	toVue(codeStr: string): string {
		let content = '<template>\n\t';
		content += this.beautifyHTML(codeStr, 1) + '\n';
		content += '</template>';
		return content;
	}

	toReactFunctional(codeStr: string): string {
		let content = 'const mambaUI = (props) => {\n';
		content += '\t return (\n';
		content += '\t\t' + this.beautifyHTML(codeStr, 2);
		content += '\n\t);\n';
		content += '});';
		return this.useReactSyntax(content);
	}

	toReactClass(codeStr: string): string {
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

	copyToClipboard(code: string): void {
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
