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
				data: {title: 'Article components', breadcrumb: 'Article'},
			},
			{
				path: 'avatar',
				loadChildren: () => import('./avatar/avatar.module').then(m => m.AvatarModule),
				data: {title: 'Avatar components', breadcrumb: 'Avatar'},
			},
			{
				path: 'banner',
				loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule),
				data: {title: 'Banner components', breadcrumb: 'Banner'},
			},
			{
				path: 'button',
				loadChildren: () => import('./button/button.module').then(m => m.ButtonModule),
				data: {title: 'Button components', breadcrumb: 'Button'},
			},
			{
				path: 'breadcrumb',
				loadChildren: () =>
					import('./breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule),
				data: {title: 'Breadcrumb components', breadcrumb: 'Breadcrumb'},
			},
			{
				path: 'blog',
				loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
				data: {title: 'Blog components', breadcrumb: 'Blog'},
			},
			{
				path: 'call-to-action',
				loadChildren: () =>
					import('./call-to-action/call-to-action.module').then(
						m => m.CallToActionModule
					),
				data: {title: 'CTA components', breadcrumb: 'CTA'},
			},
			{
				path: 'card',
				loadChildren: () => import('./card/card.module').then(m => m.CardModule),
				data: {title: 'Card components', breadcrumb: 'Card'},
			},
			{
				path: 'carousel',
				loadChildren: () =>
					import('./carousel/carousel.module').then(m => m.CarouselModule),
				data: {title: 'Carousel components', breadcrumb: 'Carousel'},
			},
			{
				path: 'contact',
				loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
				data: {title: 'Contact components', breadcrumb: 'Contact'},
			},
			{
				path: 'error',
				loadChildren: () => import('./error/error.module').then(m => m.ErrorModule),
				data: {title: 'Error components', breadcrumb: 'Error'},
			},
			{
				path: 'faq',
				loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
				data: {title: 'FAQ components', breadcrumb: 'FAQ'},
			},
			{
				path: 'feature',
				loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
				data: {title: 'Feature components', breadcrumb: 'Feature'},
			},
			{
				path: 'footer',
				loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule),
				data: {title: 'Footer components', breadcrumb: 'Footer'},
			},
			{
				path: 'form',
				loadChildren: () => import('./form/form.module').then(m => m.FormModule),
				data: {title: 'Form components', breadcrumb: 'Form'},
			},
			{
				path: 'gallery',
				loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
				data: {title: 'Gallery components', breadcrumb: 'Gallery'},
			},
			{
				path: 'header',
				loadChildren: () => import('./header/header.module').then(m => m.HeaderModule),
				data: {title: 'Header components', breadcrumb: 'Header'},
			},
			{
				path: 'hero',
				loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
				data: {title: 'Hero components', breadcrumb: 'Hero'},
			},
			{
				path: 'input',
				loadChildren: () => import('./input/input.module').then(m => m.InputModule),
				data: {title: 'Input components', breadcrumb: 'Input'},
			},
			{
				path: 'loading',
				loadChildren: () => import('./loading/loading.module').then(m => m.LoadingModule),
				data: {title: 'Loading components', breadcrumb: 'Loading'},
			},
			{
				path: 'login',
				loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
				data: {title: 'Login components', breadcrumb: 'Login'},
			},
			{
				path: 'modal',
				loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule),
				data: {title: 'Modal components', breadcrumb: 'Modal'},
			},
			{
				path: 'news',
				loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
				data: {title: 'News components', breadcrumb: 'News'},
			},
			{
				path: 'snackbar',
				loadChildren: () =>
					import('./snackbar/snackbar.module').then(m => m.SnackbarModule),
				data: {title: 'Snackbar components', breadcrumb: 'Snackbar'},
			},
			{
				path: 'pagination',
				loadChildren: () =>
					import('./pagination/pagination.module').then(m => m.PaginationModule),
				data: {title: 'Pagination components', breadcrumb: 'Pagination'},
			},
			{
				path: 'pricing',
				loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule),
				data: {title: 'Pricing components', breadcrumb: 'Pricing'},
			},
			{
				path: 'profile',
				loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
				data: {title: 'Profile components', breadcrumb: 'Profile'},
			},
			{
				path: 'review',
				loadChildren: () => import('./review/review.module').then(m => m.ReviewModule),
				data: {title: 'Review components', breadcrumb: 'review'},
			},
			{
				path: 'shopping-cart',
				loadChildren: () =>
					import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
				data: {title: 'Shopping cart components', breadcrumb: 'Shopping cart'},
			},
			{
				path: 'sidebar',
				loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule),
				data: {title: 'Sidebar components', breadcrumb: 'Sidebar'},
			},
			{
				path: 'skeleton-loader',
				loadChildren: () =>
					import('./skeleton-loader/skeleton-loader.module').then(
						m => m.SkeletonLoaderModule
					),
				data: {title: 'Skeleton loader components', breadcrumb: 'Skeleton loader'},
			},
			{
				path: 'slider',
				loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule),
				data: {title: 'Slider components', breadcrumb: 'Slider'},
			},
			{
				path: 'stats',
				loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule),
				data: {title: 'Stats components', breadcrumb: 'Stats'},
			},
			{
				path: 'steps',
				loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule),
				data: {title: 'Steps components', breadcrumb: 'Step'},
			},
			{
				path: 'table',
				loadChildren: () => import('./table/table.module').then(m => m.TableModule),
				data: {title: 'Table components', breadcrumb: 'Table'},
			},
			{
				path: 'tab',
				loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule),
				data: {title: 'Tab components', breadcrumb: 'Tabs'},
			},
			{
				path: 'team',
				loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
				data: {title: 'Team components', breadcrumb: 'Team'},
			},
			{
				path: 'testimonial',
				loadChildren: () =>
					import('./testimonial/testimonial.module').then(m => m.TestimonialModule),
				data: {title: 'Testimonial components', breadcrumb: 'Testimonial'},
			},
			{
				path: 'timeline',
				loadChildren: () =>
					import('./timeline/timeline.module').then(m => m.TimelineModule),
				data: {title: 'Timeline components', breadcrumb: 'Timeline'},
			},
			{
				path: 'toggle',
				loadChildren: () => import('./toggle/toggle.module').then(m => m.ToggleModule),
				data: {title: 'Toggle components', breadcrumb: 'Toggle'},
			},
			{
				path: 'weather',
				loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
				data: {title: 'Weather components', breadcrumb: 'Weather'},
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
