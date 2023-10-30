import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	ViewChild,
} from '@angular/core';

import {FullscreenModalService} from '@core/services/fullscreen.modal.service';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-fullscreen-modal',
	templateUrl: './fullscreen-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullscreenModalComponent extends BaseComponent implements AfterViewInit {
	@ViewChild('content') content!: ElementRef;

	constructor(private modal: FullscreenModalService) {
		super();
	}

	ngAfterViewInit() {
		const modalContent = this.modal.getModalSignal();
		this.content.nativeElement.innerHTML = modalContent();
	}

	close() {
		this.modal.close();
	}
}
