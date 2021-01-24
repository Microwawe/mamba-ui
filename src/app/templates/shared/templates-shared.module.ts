import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TemplateFullscreenModalComponent} from './template-fullscreen-modal/template-fullscreen-modal.component';
import {TemplateShowCodeComponent} from './template-show-code/template-show-code.component';

@NgModule({
	imports: [CommonModule],
	declarations: [TemplateFullscreenModalComponent, TemplateShowCodeComponent],
	exports: [TemplateFullscreenModalComponent, TemplateShowCodeComponent],
})
export class TemplatesSharedModule {}
