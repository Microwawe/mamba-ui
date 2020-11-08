import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FooterShowcaseComponent} from './footer-showcase.component';
import {SharedModule} from '@shared/shared.module';
import {FooterSimple1Component} from './footer-simple-1/footer-simple-1.component';
import {FooterSimple2Component} from './footer-simple-2/footer-simple-2.component';

const routes: Routes = [
	{
		path: '',
		component: FooterShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		FooterShowcaseComponent,
		FooterSimple1Component,
		FooterSimple2Component,
	],
})
export class FooterModule {}
