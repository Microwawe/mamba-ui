import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {ErrorShowcaseComponent} from './error-showcase.component';
import {Error1Component} from './error1/error1.component';
import {Error2Component} from './error2/error2.component';

const routes: Routes = [
	{
		path: '',
		component: ErrorShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [ErrorShowcaseComponent, Error1Component, Error2Component],
})
export class ErrorModule {}
