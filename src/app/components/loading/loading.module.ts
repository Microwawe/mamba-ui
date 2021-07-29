import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {LoadingShowcaseComponent} from './loading-showcase.component';
import {Loading1Component} from './loading1/loading1.component';
import {Loading2Component} from './loading2/loading2.component';

const routes: Routes = [
	{
		path: '',
		component: LoadingShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [LoadingShowcaseComponent, Loading1Component, Loading2Component],
})
export class LoadingModule {}
