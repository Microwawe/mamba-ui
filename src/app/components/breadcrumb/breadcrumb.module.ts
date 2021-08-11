import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {BreadcrumbShowcaseComponent} from './breadcrumb-showcase.component';
import {Breadcrumb1Component} from './breadcrumb1/breadcrumb1.component';
import {Breadcrumb2Component} from './breadcrumb2/breadcrumb2.component';

const routes: Routes = [
	{
		path: '',
		component: BreadcrumbShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [BreadcrumbShowcaseComponent, Breadcrumb1Component, Breadcrumb2Component],
})
export class BreadcrumbModule {}
