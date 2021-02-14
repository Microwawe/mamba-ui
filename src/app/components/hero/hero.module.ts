import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {HeroShowcaseComponent} from './hero-showcase.component';
import {Hero1Component} from './hero1/hero1.component';
import {Hero2Component} from './hero2/hero2.component';
import {Hero3Component} from './hero3/hero3.component';
import {Hero4Component} from './hero4/hero4.component';
import {Hero5Component} from './hero5/hero5.component';

const routes: Routes = [
	{
		path: '',
		component: HeroShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		HeroShowcaseComponent,
		Hero1Component,
		Hero2Component,
		Hero3Component,
		Hero4Component,
		Hero5Component,
	],
})
export class HeroModule {}
