import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {ProfileShowcaseComponent} from './profile-showcase.component';
import {Profile1Component} from './profile1/profile1.component';
import {Profile2Component} from './profile2/profile2.component';
import {Profile3Component} from './profile3/profile3.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		ProfileShowcaseComponent,
		Profile1Component,
		Profile2Component,
		Profile3Component,
	],
})
export class ProfileModule {}
