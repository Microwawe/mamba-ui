import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {ComponentsComponent} from './components.component';

const routes: Routes = [
	{
		path: '',
		component: ComponentsComponent,
		children: [
			{
				path: 'avatar',
				loadChildren: () => import('./avatar/avatar.module').then(m => m.AvatarModule),
				data: {title: 'Avatars', breadcrumb: 'Avatar'},
			},
			{
				path: 'button',
				loadChildren: () => import('./button/button.module').then(m => m.ButtonModule),
				data: {title: 'Buttons', breadcrumb: 'Button'},
			},
			{
				path: 'pagination',
				loadChildren: () =>
					import('./pagination/pagination.module').then(m => m.PaginationModule),
				data: {title: 'Paginations', breadcrumb: 'Pagination'},
			},
			{
				path: 'snackbar',
				loadChildren: () =>
					import('./snackbar/snackbar.module').then(m => m.SnackbarModule),
				data: {title: 'Snackbars', breadcrumb: 'Snackbar'},
			},
			{
				path: 'tab',
				loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule),
				data: {title: 'Tabs', breadcrumb: 'Tabs'},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	exports: [RouterModule],
	declarations: [ComponentsComponent],
})
export class ComponentsModule {}
