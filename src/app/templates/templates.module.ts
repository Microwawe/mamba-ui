import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {TemplateModalService} from './shared/template-fullscreen-modal/template-modal.service';
import {TemplatesSharedModule} from './shared/templates-shared.module';
import {TemplatesComponent} from './templates.component';

const routes: Routes = [
	{
		path: '',
		component: TemplatesComponent,
		children: [
			{
				path: 'portfolio',
				loadChildren: () =>
					import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
				data: {title: 'Portfolio', breadcrumb: 'Portfolio'},
			},
			{
				path: 'business',
				loadChildren: () =>
					import('./business/business.module').then(m => m.BusinessModule),
				data: {title: 'Business', breadcrumb: 'Business'},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule, TemplatesSharedModule],
	declarations: [TemplatesComponent],
	providers: [TemplateModalService],
})
export class TemplatesModule {}
