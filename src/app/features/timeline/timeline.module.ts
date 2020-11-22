import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {TimelineShowcaseComponent} from './timeline-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: TimelineShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [TimelineShowcaseComponent],
})
export class TimelineModule {}
