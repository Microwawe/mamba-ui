import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {TableShowcaseComponent} from './table-showcase.component';
import {Table1Component} from './table1/table1.component';
import {Table2Component} from './table2/table2.component';
import {Table3Component} from './table3/table3.component';
import {Table4Component} from './table4/table4.component';

const routes: Routes = [
	{
		path: '',
		component: TableShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		TableShowcaseComponent,
		Table1Component,
		Table2Component,
		Table3Component,
		Table4Component,
	],
})
export class TableModule {}
