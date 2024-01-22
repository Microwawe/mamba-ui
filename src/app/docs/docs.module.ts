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
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		DocsComponent,
		GeneralComponent,
		CreditsComponent,
		GetStartedComponent,
		RoadmapComponent,
	],
})
export class DocsModule {}
