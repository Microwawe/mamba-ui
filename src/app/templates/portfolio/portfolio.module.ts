import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PortfolioShowcaseComponent} from './portfolio-showcase.component';
import {SharedModule} from '@shared/shared.module';
import {Portfolio1Component} from './portfolio1/portfolio1.component';
import {Portfolio2Component} from './portfolio2/portfolio2.component';

const routes: Routes = [
	{
		path: '',
		component: PortfolioShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [PortfolioShowcaseComponent, Portfolio1Component, Portfolio2Component],
})
export class PortfolioModule {}
