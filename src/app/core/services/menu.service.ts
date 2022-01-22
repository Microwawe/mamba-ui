import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class MenuService {
	sideMenuOpen = new BehaviorSubject<boolean>(false);

	open(): void {
		this.sideMenuOpen.next(true);
	}

	close(): void {
		this.sideMenuOpen.next(false);
	}

	toggle(): void {
		this.sideMenuOpen.next(!this.sideMenuOpen.value);
	}

	isOpen(): Observable<boolean> {
		return this.sideMenuOpen.asObservable();
	}
}
