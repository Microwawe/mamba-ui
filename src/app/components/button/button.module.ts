import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {ButtonShowcaseComponent} from './button-showcase.component';
import {Button1Component} from './button1/button1.component';
import {Button2Component} from './button2/button2.component';
import {Button3Component} from './button3/button3.component';

const routes: Routes = [
	{
		path: '',
		component: ButtonShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [ButtonShowcaseComponent, Button1Component, Button2Component, Button3Component],
})
export class ButtonModule {}
