import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {FaqShowcaseComponent} from './faq-showcase.component';
import {Faq1Component} from './faq1/faq1.component';

const routes: Routes = [
	{
		path: '',
		component: FaqShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [FaqShowcaseComponent, Faq1Component],
})
export class FaqModule {}
