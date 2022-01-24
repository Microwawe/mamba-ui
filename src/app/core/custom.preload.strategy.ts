import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

export class CustomPreloadingStrategy implements PreloadingStrategy {
	// eslint-disable-next-line @typescript-eslint/ban-types
	preload(route: Route, load: Function): Observable<any> {
		return route.data && route.data.preload ? load() : of(null);
	}
}
