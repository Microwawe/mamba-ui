import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {FooterShowcaseComponent} from './footer-showcase.component';
import {Footer1Component} from './footer1/footer1.component';
import {Footer2Component} from './footer2/footer2.component';
import {Footer3Component} from './footer3/footer3.component';

const routes: Routes = [
	{
		path: '',
		component: FooterShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [FooterShowcaseComponent, Footer1Component, Footer2Component, Footer3Component],
})
export class FooterModule {}
