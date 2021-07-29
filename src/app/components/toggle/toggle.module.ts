import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {ToggleShowcaseComponent} from './toggle-showcase.component';
import {Toggle1Component} from './toggle1/toggle1.component';
import {Toggle2Component} from './toggle2/toggle2.component';
import {Toggle3Component} from './toggle3/toggle3.component';
import {Toggle4Component} from './toggle4/toggle4.component';

const routes: Routes = [
	{
		path: '',
		component: ToggleShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		ToggleShowcaseComponent,
		Toggle1Component,
		Toggle2Component,
		Toggle3Component,
		Toggle4Component,
	],
})
export class ToggleModule {}
