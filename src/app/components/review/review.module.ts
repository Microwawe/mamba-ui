import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {ReviewShowcaseComponent} from './review-showcase.component';
import {Review1Component} from './review1/review1.component';
import {Review2Component} from './review2/review2.component';
import {Review3Component} from './review3/review3.component';

const routes: Routes = [
	{
		path: '',
		component: ReviewShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [ReviewShowcaseComponent, Review1Component, Review2Component, Review3Component],
})
export class ReviewModule {}
