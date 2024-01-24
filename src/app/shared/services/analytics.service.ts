import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AnalyticsService {
	private endpoint = 'https://plausible.io/api/event';
	private domain = 'mambaui.com';
	private headers = new HttpHeaders().set('Content-Type', 'text/plain');

	constructor(private http: HttpClient) {}

	triggerEvent(eventName: string, props?: any): void {
		if (
			/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname) ||
			location.protocol === 'file:'
		) {
			return;
		}

		const payload: Payload = {
			n: eventName,
			u: location.href,
			d: this.domain,
			r: document.referrer,
			w: window.innerWidth,
			p: JSON.stringify(props),
		};

		this.http
			.post(this.endpoint, JSON.stringify(payload), {headers: this.headers})
			.subscribe()
			.unsubscribe();
	}
}

/**
 * @param n Event name, has to match one of the events set up in Plausible
 * @param u Current url where the event was triggered
 * @param d Domain, has to match the one in the analytics script (mambaui.com)
 * @param r Referrer or null
 * @param w Window width
 * @param m Meta info, optional
 * @param p Custom properties, optional
 */
interface Payload {
	n: string;
	u: string;
	d: string;
	r: string | null;
	w: number;
	m?: string;
	p?: string;
}

/*

(function(window, plausibleHost){
	'use strict';

	var location = window.location
	var document = window.document

	var scriptEl = document.querySelector('[src*="' + plausibleHost +'"]')
	var domain = scriptEl && scriptEl.getAttribute('data-domain')


 */
