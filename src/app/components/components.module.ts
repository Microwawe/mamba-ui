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
		data: {title: 'Snackbars', breadcrumb: 'Snackbar'},
	},
	{
		path: 'button',
		loadChildren: () => import('./button/button.module').then(m => m.ButtonModule),
		data: {title: 'Buttons', breadcrumb: 'Button'},
	},
	{
		path: 'tab',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule),
		data: {title: 'Tabs', breadcrumb: 'Tabs'},
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
