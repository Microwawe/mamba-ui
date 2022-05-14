import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {ModalShowcaseComponent} from './modal-showcase.component';
import {Modal1Component} from './modal1/modal1.component';
import {Modal2Component} from './modal2/modal2.component';
import {Modal3Component} from './modal3/modal3.component';
import {Modal4Component} from './modal4/modal4.component';

const routes: Routes = [
	{
		path: '',
		component: ModalShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		ModalShowcaseComponent,
		Modal1Component,
		Modal2Component,
		Modal3Component,
		Modal4Component,
	],
})
export class ModalModule {}
