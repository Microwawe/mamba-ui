import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MenuService {
	sideMenuOpen = new BehaviorSubject<boolean>(false);

	constructor() {}

	open() {
		this.sideMenuOpen.next(true);
	}

	close() {
		this.sideMenuOpen.next(false);
	}

	toggle() {
		this.sideMenuOpen.next(!this.sideMenuOpen.value);
	}

	isOpen() {
		return this.sideMenuOpen.asObservable();
	}
}
