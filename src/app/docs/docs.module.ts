import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {CreditsComponent} from './credits/credits.component';
import {DocsComponent} from './docs.component';
import {GeneralComponent} from './general/general.component';
import {GetStartedComponent} from './get-started/get-started.component';
import {RoadmapComponent} from './roadmap/roadmap.component';

const routes: Routes = [
	{
		path: '',
		component: DocsComponent,
		children: [
			{
				path: '',
				component: GetStartedComponent,
			},
			{
				path: 'credits',
				component: CreditsComponent,
				data: {title: 'Credits', breadcrumb: 'Credits'},
			},
			{
				path: 'general',
				component: GeneralComponent,
				data: {title: 'General', breadcrumb: 'General'},
			},
			{
				path: 'roadmap',
				component: RoadmapComponent,
				data: {title: 'Roadmap', breadcrumb: 'Roadmap'},
			},
		],
	},

	/*
	{
		path: 'button',
		loadChildren: () => import('./button/button.module').then(m => m.ButtonModule),
		data: {title: 'Buttons', breadcrumb: 'Button'},
	},
	{
		path: 'tab',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule),
		data: {title: 'Tabs', breadcrumb: 'Tabs'},
	}, */
	/* {
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
	}, */
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [DocsComponent, GeneralComponent, CreditsComponent, GetStartedComponent],
})
export class DocsModule {}
