import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

import {BaseComponent} from '@shared/components/base/base.component';

import {TemplateModalService} from './template-modal.service';

@Component({
	selector: 'custom-template-fullscreen-modal',
	templateUrl: './template-fullscreen-modal.component.html',
})
export class TemplateFullscreenModalComponent extends BaseComponent implements AfterViewInit {
	@ViewChild('content') content!: ElementRef;

	constructor(private templateModal: TemplateModalService) {
		super();
	}

	ngAfterViewInit() {
		this.templateModal
			.getModalOpen()
			.pipe(take(1))
			.subscribe(html => {
				this.content.nativeElement.innerHTML = html;
			});
	}

	close() {
		this.templateModal.close();
	}
}
