import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AvatarShowcaseComponent} from './avatar-showcase.component';
import {SharedModule} from '@shared/shared.module';
import {Avatar1Component} from './avatar1/avatar1.component';

const routes: Routes = [
	{
		path: '',
		component: AvatarShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [AvatarShowcaseComponent, Avatar1Component],
})
export class AvatarModule {}
