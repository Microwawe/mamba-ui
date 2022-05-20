import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {WeatherShowcaseComponent} from './weather-showcase.component';
import {Weather1Component} from './weather1/weather1.component';
import {Weather2Component} from './weather2/weather2.component';
import {Weather3Component} from './weather3/weather3.component';

const routes: Routes = [
	{
		path: '',
		component: WeatherShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		WeatherShowcaseComponent,
		Weather1Component,
		Weather2Component,
		Weather3Component,
	],
})
export class WeatherModule {}
