import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {HeroShowcaseComponent} from './hero-showcase/hero-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: HeroShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [HeroShowcaseComponent],
})
export class HeroModule {}
