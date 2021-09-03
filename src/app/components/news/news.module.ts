import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {NewsShowcaseComponent} from './news-showcase.component';
import {News1Component} from './news1/news1.component';
import {News2Component} from './news2/news2.component';
import {News3Component} from './news3/news3.component';

const routes: Routes = [
	{
		path: '',
		component: NewsShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [NewsShowcaseComponent, News1Component, News2Component, News3Component],
})
export class NewsModule {}
