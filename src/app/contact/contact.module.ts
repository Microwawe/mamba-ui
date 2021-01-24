import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {ContactComponent} from './contact.component';

const routes: Routes = [
	{
		path: '',
		component: ContactComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [ContactComponent],
})
export class ContactModule {}
