import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {CallToActionShowcaseComponent} from './call-to-action-showcase.component';
import {Cta1Component} from './cta1/cta1.component';
import {Cta2Component} from './cta2/cta2.component';
import {Cta3Component} from './cta3/cta3.component';
import {Cta4Component} from './cta4/cta4.component';
import {Cta5Component} from './cta5/cta5.component';
import {Cta6Component} from './cta6/cta6.component';

const routes: Routes = [
	{
		path: '',
		component: CallToActionShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		CallToActionShowcaseComponent,
		Cta1Component,
		Cta2Component,
		Cta3Component,
		Cta4Component,
		Cta5Component,
		Cta6Component,
	],
})
export class CallToActionModule {}
