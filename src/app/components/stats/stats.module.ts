import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {StatsShowcaseComponent} from './stats-showcase.component';
import {Stats1Component} from './stats1/stats1.component';
import {Stats2Component} from './stats2/stats2.component';
import {Stats3Component} from './stats3/stats3.component';
import {Stats4Component} from './stats4/stats4.component';

const routes: Routes = [
	{
		path: '',
		component: StatsShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		StatsShowcaseComponent,
		Stats1Component,
		Stats2Component,
		Stats3Component,
		Stats4Component,
	],
})
export class StatsModule {}
