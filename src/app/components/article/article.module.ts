import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {ArticleShowcaseComponent} from './article-showcase.component';
import {Article1Component} from './article1/article1.component';
import {Article2Component} from './article2/article2.component';
import {Article3Component} from './article3/article3.component';

const routes: Routes = [
	{
		path: '',
		component: ArticleShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		ArticleShowcaseComponent,
		Article1Component,
		Article2Component,
		Article3Component,
	],
})
export class ArticleModule {}
