import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {HeroShowcaseComponent} from './hero-showcase.component';
import {Hero1Component} from './hero1/hero1.component';
import {Hero2Component} from './hero2/hero2.component';

const routes: Routes = [
	{
		path: '',
		component: HeroShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [HeroShowcaseComponent, Hero1Component, Hero2Component],
})
export class HeroModule {}
