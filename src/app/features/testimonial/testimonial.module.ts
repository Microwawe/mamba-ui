import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {TestimonialShowcaseComponent} from './testimonial-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: TestimonialShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [TestimonialShowcaseComponent],
})
export class TestimonialModule {}
