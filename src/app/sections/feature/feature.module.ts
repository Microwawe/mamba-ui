import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {FeatureShowcaseComponent} from './feature-showcase.component';
import {Feature1Component} from './feature1/feature1.component';
import {Feature2Component} from './feature2/feature2.component';
import {Feature3Component} from './feature3/feature3.component';
import {Feature4Component} from './feature4/feature4.component';
import {Feature5Component} from './feature5/feature5.component';

const routes: Routes = [
	{
		path: '',
		component: FeatureShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		FeatureShowcaseComponent,
		Feature1Component,
		Feature2Component,
		Feature3Component,
		Feature4Component,
		Feature5Component,
	],
})
export class FeatureModule {}
