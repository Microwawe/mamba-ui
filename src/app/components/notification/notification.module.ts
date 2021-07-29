import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {NotificationShowcaseComponent} from './notification-showcase.component';
import {Notification1Component} from './notification1/notification1.component';
import {Notification2Component} from './notification2/notification2.component';
import {Notification3Component} from './notification3/notification3.component';

const routes: Routes = [
	{
		path: '',
		component: NotificationShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		NotificationShowcaseComponent,
		Notification1Component,
		Notification2Component,
		Notification3Component,
	],
})
export class NotificationModule {}
