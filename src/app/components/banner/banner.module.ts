import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {BannerShowcaseComponent} from './banner-showcase.component';
import {Banner1Component} from './banner1/banner1.component';
import {Banner2Component} from './banner2/banner2.component';

const routes: Routes = [
	{
		path: '',
		component: BannerShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [BannerShowcaseComponent, Banner1Component, Banner2Component],
})
export class BannerModule {}
