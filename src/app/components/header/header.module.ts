import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {HeaderShowcaseComponent} from './header-showcase.component';
import {Header1Component} from './header1/header1.component';
import {Header2Component} from './header2/header2.component';
import {Header3Component} from './header3/header3.component';
import {Header4Component} from './header4/header4.component';
import {Header5Component} from './header5/header5.component';

const routes: Routes = [
	{
		path: '',
		component: HeaderShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		HeaderShowcaseComponent,
		Header1Component,
		Header2Component,
		Header3Component,
		Header4Component,
		Header5Component,
	],
})
export class HeaderModule {}
