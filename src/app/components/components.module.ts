import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {EmptyChildRouteComponent} from '@shared/components/empty-child-route/empty-child-route.component';
import {ComponentsComponent} from './components.component';

const routes: Routes = [
	{
		path: '',
		component: ComponentsComponent,
		children: [
			{
				path: '',
				component: EmptyChildRouteComponent,
			},
			{
				path: 'article',
				loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
				data: {title: 'Articles', breadcrumb: 'Article'},
			},
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
				path: 'breadcrumb',
				loadChildren: () =>
					import('./breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule),
				data: {title: 'Breadcrumbs', breadcrumb: 'Breadcrumb'},
			},
			{
				path: 'blog',
				loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
				data: {title: 'Blog', breadcrumb: 'Blog'},
			},
			{
				path: 'call-to-action',
				loadChildren: () =>
					import('./call-to-action/call-to-action.module').then(
						m => m.CallToActionModule
					),
				data: {title: 'CTA', breadcrumb: 'CTA'},
			},
			{
				path: 'contact',
				loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
				data: {title: 'Contact', breadcrumb: 'Contact'},
			},
			{
				path: 'error',
				loadChildren: () => import('./error/error.module').then(m => m.ErrorModule),
				data: {title: 'Error', breadcrumb: 'Error'},
			},
			{
				path: 'faq',
				loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
				data: {title: 'FAQ', breadcrumb: 'FAQ'},
			},
			{
				path: 'feature',
				loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
				data: {title: 'Feature', breadcrumb: 'Feature'},
			},
			{
				path: 'footer',
				loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule),
				data: {title: 'Footer', breadcrumb: 'Footer'},
			},
			{
				path: 'form',
				loadChildren: () => import('./form/form.module').then(m => m.FormModule),
				data: {title: 'Form', breadcrumb: 'Form'},
			},
			{
				path: 'gallery',
				loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
				data: {title: 'Gallery', breadcrumb: 'Gallery'},
			},
			{
				path: 'header',
				loadChildren: () => import('./header/header.module').then(m => m.HeaderModule),
				data: {title: 'Header', breadcrumb: 'Header'},
			},
			{
				path: 'hero',
				loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
				data: {title: 'Hero', breadcrumb: 'Hero'},
			},
			{
				path: 'input',
				loadChildren: () => import('./input/input.module').then(m => m.InputModule),
				data: {title: 'Input', breadcrumb: 'Input'},
			},
			{
				path: 'loading',
				loadChildren: () => import('./loading/loading.module').then(m => m.LoadingModule),
				data: {title: 'Loading', breadcrumb: 'Loading'},
			},
			{
				path: 'login',
				loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
				data: {title: 'Login', breadcrumb: 'Login'},
			},
			{
				path: 'notification',
				loadChildren: () =>
					import('./notification/notification.module').then(m => m.NotificationModule),
				data: {title: 'Notifications', breadcrumb: 'Notification'},
			},
			{
				path: 'pagination',
				loadChildren: () =>
					import('./pagination/pagination.module').then(m => m.PaginationModule),
				data: {title: 'Paginations', breadcrumb: 'Pagination'},
			},
			{
				path: 'pricing',
				loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule),
				data: {title: 'Pricing', breadcrumb: 'Pricing'},
			},
			{
				path: 'profile',
				loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
				data: {title: 'Profile', breadcrumb: 'Profile'},
			},
			{
				path: 'review',
				loadChildren: () => import('./review/review.module').then(m => m.ReviewModule),
				data: {title: 'reviews', breadcrumb: 'review'},
			},
			{
				path: 'shopping-cart',
				loadChildren: () =>
					import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
				data: {title: 'Shopping cart', breadcrumb: 'Shopping cart'},
			},
			{
				path: 'sidebar',
				loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule),
				data: {title: 'Sidebar', breadcrumb: 'Sidebar'},
			},
			{
				path: 'stats',
				loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule),
				data: {title: 'Stats', breadcrumb: 'Stats'},
			},
			{
				path: 'steps',
				loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule),
				data: {title: 'Step', breadcrumb: 'Step'},
			},
			{
				path: 'tab',
				loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule),
				data: {title: 'Tabs', breadcrumb: 'Tabs'},
			},
			{
				path: 'team',
				loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
				data: {title: 'Team', breadcrumb: 'Team'},
			},
			{
				path: 'testimonial',
				loadChildren: () =>
					import('./testimonial/testimonial.module').then(m => m.TestimonialModule),
				data: {title: 'Testimonial', breadcrumb: 'Testimonial'},
			},
			{
				path: 'timeline',
				loadChildren: () =>
					import('./timeline/timeline.module').then(m => m.TimelineModule),
				data: {title: 'Timeline', breadcrumb: 'Timeline'},
			},
			{
				path: 'toggle',
				loadChildren: () => import('./toggle/toggle.module').then(m => m.ToggleModule),
				data: {title: 'Toggle', breadcrumb: 'Toggle'},
			},
			{
				path: 'weather',
				loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
				data: {title: 'Weather', breadcrumb: 'Weather'},
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
