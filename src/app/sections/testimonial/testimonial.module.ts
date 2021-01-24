import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {TestimonialShowcaseComponent} from './testimonial-showcase.component';
import {Testimonial1Component} from './testimonial1/testimonial1.component';
import {Testimonial2Component} from './testimonial2/testimonial2.component';
import {Testimonial3Component} from './testimonial3/testimonial3.component';
import {Testimonial4Component} from './testimonial4/testimonial4.component';

const routes: Routes = [
	{
		path: '',
		component: TestimonialShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		TestimonialShowcaseComponent,
		Testimonial1Component,
		Testimonial2Component,
		Testimonial3Component,
		Testimonial4Component,
	],
})
export class TestimonialModule {}
