import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {BlogListing1Component} from './blog-listing-1/blog-listing-1.component';
import {BlogPost1Component} from './blog-post-1/blog-post-1.component';
import {BlogShowcaseComponent} from './blog-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: BlogShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		BlogShowcaseComponent,
		BlogListing1Component,
		BlogPost1Component,
	],
})
export class BlogModule {}
