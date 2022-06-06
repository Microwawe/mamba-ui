import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {SliderShowcaseComponent} from './slider-showcase.component';
import {Slider1Component} from './slider1/slider1.component';
import {Slider2Component} from './slider2/slider2.component';

const routes: Routes = [
	{
		path: '',
		component: SliderShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [SliderShowcaseComponent, Slider1Component, Slider2Component],
})
export class SliderModule {}
