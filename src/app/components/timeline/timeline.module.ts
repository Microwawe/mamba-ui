import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {TimelineShowcaseComponent} from './timeline-showcase.component';
import {Timeline1Component} from './timeline1/timeline1.component';
import {Timeline2Component} from './timeline2/timeline2.component';
import {Timeline3Component} from './timeline3/timeline3.component';
import {Timeline4Component} from './timeline4/timeline4.component';
import {Timeline5Component} from './timeline5/timeline5.component';

const routes: Routes = [
	{
		path: '',
		component: TimelineShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		TimelineShowcaseComponent,
		Timeline1Component,
		Timeline2Component,
		Timeline3Component,
		Timeline4Component,
		Timeline5Component,
	],
})
export class TimelineModule {}
