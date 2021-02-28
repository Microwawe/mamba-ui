import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {Cart1Component} from './cart1/cart1.component';
import {Cart2Component} from './cart2/cart2.component';
import {ShoppingCartShowcaseComponent} from './shopping-cart-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: ShoppingCartShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [ShoppingCartShowcaseComponent, Cart1Component, Cart2Component],
})
export class ShoppingCartModule {}
