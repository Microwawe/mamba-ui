import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {TabsShowcaseComponent} from './tabs-showcase.component';
import {Tabs1Component} from './tabs1/tabs1.component';
import {Tabs2Component} from './tabs2/tabs2.component';

const routes: Routes = [
	{
		path: '',
		component: TabsShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [TabsShowcaseComponent, Tabs1Component, Tabs2Component],
})
export class TabsModule {}
