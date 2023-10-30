import {Injectable, Signal, signal} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class MenuService {
	sideMenuOpen = signal<boolean>(false);

	open(): void {
		this.sideMenuOpen.set(true);
	}

	close(): void {
		this.sideMenuOpen.set(false);
	}

	toggle(): void {
		this.sideMenuOpen.update(value => !value);
	}

	openSignal() {
		return this.sideMenuOpen;
	}
}
