import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {FeatureShowcaseComponent} from './feature-showcase.component';
import {Feature1Component} from './feature1/feature1.component';
import {Feature2Component} from './feature2/feature2.component';

const routes: Routes = [
	{
		path: '',
		component: FeatureShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [FeatureShowcaseComponent, Feature1Component, Feature2Component],
})
export class FeatureModule {}
