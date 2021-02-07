import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {TeamShowcaseComponent} from './team-showcase.component';
import {Team1Component} from './team1/team1.component';
import {Team2Component} from './team2/team2.component';
import {Team3Component} from './team3/team3.component';

const routes: Routes = [
	{
		path: '',
		component: TeamShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [TeamShowcaseComponent, Team1Component, Team2Component, Team3Component],
})
export class TeamModule {}
