import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

import {BaseComponent} from '@shared/components/base/base.component';
import {FullscreenModalService} from '../../../core/services/fullscreen.modal.service';

@Component({
	selector: 'custom-fullscreen-modal',
	templateUrl: './fullscreen-modal.component.html',
})
export class FullscreenModalComponent extends BaseComponent implements AfterViewInit {
	@ViewChild('content') content!: ElementRef;

	constructor(private modal: FullscreenModalService) {
		super();
	}

	ngAfterViewInit() {
		this.modal
			.getModalOpen()
			.pipe(take(1))
			.subscribe(html => {
				this.content.nativeElement.innerHTML = html;
			});
	}

	close() {
		this.modal.close();
	}
}
