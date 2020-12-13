import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {Template1Component} from './template1/template1.component';
import {TemplatesComponent} from './templates.component';

const routes: Routes = [
	{
		path: '',
		component: TemplatesComponent,
	},
	{
		path: 'test',
		component: Template1Component,
	},
	/* {
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
	}, */
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [TemplatesComponent, Template1Component],
})
export class TemplatesModule {}
