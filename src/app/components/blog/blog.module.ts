import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {BlogShowcaseComponent} from './blog-showcase.component';
import {Blog1Component} from './blog1/blog1.component';
import {Blog2Component} from './blog2/blog2.component';
import {Blog3Component} from './blog3/blog3.component';
import {Blog4Component} from './blog4/blog4.component';

const routes: Routes = [
	{
		path: '',
		component: BlogShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		BlogShowcaseComponent,
		Blog1Component,
		Blog2Component,
		Blog3Component,
		Blog4Component,
	],
})
export class BlogModule {}
