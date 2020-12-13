import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {SnackbarShowcaseComponent} from './snackbar-showcase.component';
import {Snackbar1Component} from './snackbar1/snackbar1.component';
import {Snackbar2Component} from './snackbar2/snackbar2.component';

const routes: Routes = [
	{
		path: '',
		component: SnackbarShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [SnackbarShowcaseComponent, Snackbar1Component, Snackbar2Component],
})
export class SnackbarModule {}
