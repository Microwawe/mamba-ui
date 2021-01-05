import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {BaseComponent} from '@shared/components/base/base.component';
import {distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
	selector: 'custom-breadcrumb',
	templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent implements OnInit {
	breadcrumbs: IBreadCrumb[];
	showBreadcrumbs = true;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		super();
		this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
	}

	ngOnInit() {
		this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				distinctUntilChanged()
			)
			.subscribe(() => {
				this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
			});
	}

	buildBreadCrumb(
		route: ActivatedRoute,
		url = '',
		breadcrumbs: IBreadCrumb[] = []
	): IBreadCrumb[] {
		//If no routeConfig is avalailable we are on the root path
		let label = route?.routeConfig?.data?.breadcrumb || '';
		let path = route?.routeConfig?.path || '';

		// If the route is dynamic route such as ':id', remove it
		const lastRoutePart = path.split('/').pop();
		if (lastRoutePart && lastRoutePart?.startsWith(':') && !!route.snapshot) {
			const paramName = lastRoutePart.split(':')[1];
			path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
			label = route.snapshot.params[paramName];
		}

		//In the routeConfig the complete path is not available,
		//so we rebuild it each time
		const nextUrl = path ? `${url}/${path}` : url;

		const breadcrumb: IBreadCrumb = {
			label: label,
			url: nextUrl,
		};
		// Only adding route with non-empty label
		const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
		if (route.firstChild) {
			//If we are not on our current path yet,
			//there will be more children to look after, to build our breadcumb
			return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
		}
		return newBreadcrumbs;
	}
}

export interface IBreadCrumb {
	label: string;
	url: string;
}
