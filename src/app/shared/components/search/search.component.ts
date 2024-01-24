import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	OnDestroy,
	Output,
	ViewChild,
} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, tap} from 'rxjs/operators';

import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@shared/services/analytics.service';

@Component({
	selector: 'custom-search',
	templateUrl: './search.component.html',
})
export class SearchComponent extends BaseComponent implements AfterViewInit, OnDestroy {
	@ViewChild('searchQuery') input!: ElementRef;
	@Output() queryChange = new EventEmitter<string>();
	eventSub: Subscription | undefined;
	query = '';

	constructor(private analytics: AnalyticsService) {
		super();
	}

	ngAfterViewInit(): void {
		this.eventSub = fromEvent(this.input.nativeElement, 'keyup')
			.pipe(
				map((event: unknown) =>
					event instanceof KeyboardEvent ? (<HTMLInputElement>event.target).value : ''
				),
				tap((inputValue: string) => this.queryChange.emit(inputValue)), // emit every value change
				filter((inputValue: string) => !!inputValue && inputValue.length >= 3),
				distinctUntilChanged(),
				debounceTime(1000) // trigger analytics only after user stops typing
			)
			.subscribe((inputValue: string) => {
				this.analytics.triggerEvent(PlausibleEvent.SEARCH, {
					query: inputValue.toLowerCase(),
				});
			});
	}

	resetQuery(): void {
		this.query = '';
	}

	ngOnDestroy(): void {
		this.eventSub?.unsubscribe();
	}
}
