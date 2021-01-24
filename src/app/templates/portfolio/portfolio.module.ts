import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PortfolioShowcaseComponent} from './portfolio-showcase.component';
import {SharedModule} from '@shared/shared.module';
import {Portfolio1Component} from './portfolio1/portfolio1.component';
import {TemplatesSharedModule} from '../shared/templates-shared.module';

const routes: Routes = [
	{
		path: '',
		component: PortfolioShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule, TemplatesSharedModule],
	declarations: [PortfolioShowcaseComponent, Portfolio1Component],
})
export class PortfolioModule {}
