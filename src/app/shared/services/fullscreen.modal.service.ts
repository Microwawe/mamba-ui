import {Injectable, Signal, signal} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class FullscreenModalService {
	private modalContent = signal<string>('');

	constructor() {}

	open(html: string): void {
		this.modalContent.set(html);
	}

	close(): void {
		this.modalContent.set('');
	}

	getModalSignal(): Signal<string> {
		return this.modalContent.asReadonly();
	}
}
