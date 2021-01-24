import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {BaseComponent} from '@shared/components/base/base.component';
import {TemplateModalService} from './shared/template-fullscreen-modal/template-modal.service';

@Component({
	selector: 'custom-templates',
	templateUrl: './templates.component.html',
})
export class TemplatesComponent extends BaseComponent implements OnInit {
	modalContent!: Observable<string>;
	categories = [{name: 'business', count: 1}];

	constructor(private templateModal: TemplateModalService) {
		super();
	}

	ngOnInit() {
		this.modalContent = this.templateModal.getModalOpen();
	}
}
