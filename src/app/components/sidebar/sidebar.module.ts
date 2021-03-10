import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {SidebarShowcaseComponent} from './sidebar-showcase.component';
import {Sidebar1Component} from './sidebar1/sidebar1.component';
import {Sidebar2Component} from './sidebar2/sidebar2.component';
import {Sidebar3Component} from './sidebar3/sidebar3.component';

const routes: Routes = [
	{
		path: '',
		component: SidebarShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		SidebarShowcaseComponent,
		Sidebar1Component,
		Sidebar2Component,
		Sidebar3Component,
	],
})
export class SidebarModule {}
