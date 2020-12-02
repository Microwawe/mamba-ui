import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {DemosComponent} from './demos.component';

const routes: Routes = [
	{
		path: '',
		component: DemosComponent,
	},

	/* {
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
	}, */
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [DemosComponent],
})
export class DemosModule {}
