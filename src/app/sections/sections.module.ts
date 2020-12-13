import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {SectionsComponent} from './sections.component';

const routes: Routes = [
	{
		path: '',
		component: SectionsComponent,
		children: [
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
				path: 'login',
				loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
				data: {title: 'Login', breadcrumb: 'Login'},
			},
			{
				path: 'pricing',
				loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule),
				data: {title: 'Pricing', breadcrumb: 'Pricing'},
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
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	exports: [RouterModule],
	declarations: [SectionsComponent],
})
export class SectionsModule {}
