import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class FullscreenModalService {
	private isModalOpen: BehaviorSubject<string>;

	constructor() {
		this.isModalOpen = new BehaviorSubject<string>('');
	}

	open(html: string): void {
		this.isModalOpen.next(html);
	}

	close(): void {
		this.isModalOpen.next('');
	}

	getModalOpen(): Observable<string> {
		return this.isModalOpen;
	}
}
