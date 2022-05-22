import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {DropdownShowcaseComponent} from './dropdown-showcase.component';
import {Dropdown1Component} from './dropdown1/dropdown1.component';
import {Dropdown2Component} from './dropdown2/dropdown2.component';
import {Dropdown3Component} from './dropdown3/dropdown3.component';

const routes: Routes = [
	{
		path: '',
		component: DropdownShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		DropdownShowcaseComponent,
		Dropdown1Component,
		Dropdown2Component,
		Dropdown3Component,
	],
})
export class DropdownModule {}
