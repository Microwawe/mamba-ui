import {NgModule} from '@angular/core';

import {GalleryShowcaseComponent} from './gallery-showcase.component';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {Gallery1Component} from './gallery1/gallery1.component';

const routes: Routes = [
	{
		path: '',
		component: GalleryShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [GalleryShowcaseComponent, Gallery1Component],
})
export class GalleryModule {}
