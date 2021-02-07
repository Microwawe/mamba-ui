import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {StepsShowcaseComponent} from './steps-showcase.component';
import {Steps1Component} from './steps1/steps1.component';
import {Steps2Component} from './steps2/steps2.component';
import {Steps3Component} from './steps3/steps3.component';

const routes: Routes = [
	{
		path: '',
		component: StepsShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [StepsShowcaseComponent, Steps1Component, Steps2Component, Steps3Component],
})
export class StepsModule {}
