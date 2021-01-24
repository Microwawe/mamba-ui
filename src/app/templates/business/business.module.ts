import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {BusinessShowcaseComponent} from './business-showcase.component';
import {Business1Component} from './business1/business1.component';

const routes: Routes = [
	{
		path: '',
		component: BusinessShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [Business1Component, BusinessShowcaseComponent],
})
export class BusinessModule {}
