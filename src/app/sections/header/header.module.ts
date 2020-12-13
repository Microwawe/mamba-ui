import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {HeaderShowcaseComponent} from './header-showcase.component';
import {Header1Component} from './header1/header1.component';
import {Header2Component} from './header2/header2.component';

const routes: Routes = [
	{
		path: '',
		component: HeaderShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [HeaderShowcaseComponent, Header1Component, Header2Component],
})
export class HeaderModule {}
