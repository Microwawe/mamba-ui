import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {FormShowcaseComponent} from './form-showcase.component';

const routes: Routes = [
	{
		path: '',
		component: FormShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [FormShowcaseComponent],
})
export class FormModule {}
