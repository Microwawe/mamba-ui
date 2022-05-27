import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {SnackbarShowcaseComponent} from './snackbar-showcase.component';
import {Snackbar1Component} from './snackbar1/snackbar1.component';
import {Snackbar2Component} from './snackbar2/snackbar2.component';
import {Snackbar3Component} from './snackbar3/snackbar3.component';
import {Snackbar4Component} from './snackbar4/snackbar4.component';
import {Snackbar5Component} from './snackbar5/snackbar5.component';
import {Snackbar6Component} from './snackbar6/snackbar6.component';

const routes: Routes = [
	{
		path: '',
		component: SnackbarShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		SnackbarShowcaseComponent,
		Snackbar1Component,
		Snackbar2Component,
		Snackbar3Component,
		Snackbar4Component,
		Snackbar5Component,
		Snackbar6Component,
	],
})
export class SnackbarModule {}
