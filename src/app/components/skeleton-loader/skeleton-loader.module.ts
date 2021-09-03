import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {SkeletonLoaderShowcaseComponent} from './skeleton-loader-showcase.component';
import {Skeleton1Component} from './skeleton1/skeleton1.component';
import {Skeleton2Component} from './skeleton2/skeleton2.component';

const routes: Routes = [
	{
		path: '',
		component: SkeletonLoaderShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [SkeletonLoaderShowcaseComponent, Skeleton1Component, Skeleton2Component],
})
export class SkeletonLoaderModule {}
