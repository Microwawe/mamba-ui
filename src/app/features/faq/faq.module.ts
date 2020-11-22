import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {FaqShowcaseComponent} from './faq-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: FaqShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [FaqShowcaseComponent],
})
export class FaqModule {}
