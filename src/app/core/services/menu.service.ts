import {Injectable, Signal, signal} from '@angular/core';

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

	openSignal(): Signal<boolean> {
		return this.sideMenuOpen.asReadonly();
	}
}
