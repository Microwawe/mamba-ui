import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {CardShowcaseComponent} from './card-showcase.component';
import {Card1Component} from './card1/card1.component';
import {Card2Component} from './card2/card2.component';
import {Card3Component} from './card3/card3.component';
import {Card4Component} from './card4/card4.component';

const routes: Routes = [
	{
		path: '',
		component: CardShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		CardShowcaseComponent,
		Card1Component,
		Card2Component,
		Card3Component,
		Card4Component,
	],
})
export class CardModule {}
