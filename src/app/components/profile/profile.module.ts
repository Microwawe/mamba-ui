import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {ProfileShowcaseComponent} from './profile-showcase.component';
import {Profile1Component} from './profile1/profile1.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [ProfileShowcaseComponent, Profile1Component],
})
export class ProfileModule {}
