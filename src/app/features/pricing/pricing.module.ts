import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {PricingShowcaseComponent} from './pricing-showcase.component';
import {Pricing1Component} from './pricing1/pricing1.component';
import {Pricing2Component} from './pricing2/pricing2.component';

const routes: Routes = [
	{
		path: '',
		component: PricingShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		PricingShowcaseComponent,
		Pricing1Component,
		Pricing2Component,
	],
})
export class PricingModule {}
