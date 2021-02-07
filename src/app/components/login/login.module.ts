import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {LoginShowcaseComponent} from './login-showcase.component';
import {Login1Component} from './login1/login1.component';
import {Login2Component} from './login2/login2.component';

const routes: Routes = [
	{
		path: '',
		component: LoginShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [LoginShowcaseComponent, Login1Component, Login2Component],
})
export class LoginModule {}
