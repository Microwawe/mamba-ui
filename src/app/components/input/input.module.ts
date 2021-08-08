import {NgModule} from '@angular/core';

import {InputShowcaseComponent} from './input-showcase.component';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {Input1Component} from './input1/input1.component';
import {Input2Component} from './input2/input2.component';
import {Input3Component} from './input3/input3.component';
import {Input4Component} from './input4/input4.component';

const routes: Routes = [
	{
		path: '',
		component: InputShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		InputShowcaseComponent,
		Input1Component,
		Input2Component,
		Input3Component,
		Input4Component,
	],
})
export class InputModule {}
