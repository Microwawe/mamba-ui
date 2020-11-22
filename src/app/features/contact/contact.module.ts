import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {ContactShowcaseComponent} from './contact-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: ContactShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [ContactShowcaseComponent],
})
export class ContactModule {}
