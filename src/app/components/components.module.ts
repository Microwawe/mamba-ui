import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {ComponentsComponent} from './components.component';

const routes: Routes = [
	{
		path: '',
		component: ComponentsComponent,
	},
	{
		path: 'snackbar',
		loadChildren: () => import('./snackbar/snackbar.module').then(m => m.SnackbarModule),
	},
	/* {
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
	}, */
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	exports: [RouterModule],
	declarations: [ComponentsComponent],
})
export class ComponentsModule {}
