import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {LoginShowcaseComponent} from './login-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: LoginShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [LoginShowcaseComponent],
})
export class LoginModule {}
