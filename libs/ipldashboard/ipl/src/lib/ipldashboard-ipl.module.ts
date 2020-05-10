import { RouterModule, Routes } from '@angular/router';
import { IpldashboardCoreModule } from './../../../core/src/lib/ipldashboard-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpldashboardTeamListComponent } from './container/ipldashboard-team-list/ipldashboard-team-list.component';
import { TeamGridComponent } from './components/team-grid/team-grid.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromIpl from './+state/ipl/ipl.reducer';
import { IplEffects } from './+state/ipl/ipl.effects';
import { IplFacade } from './+state/ipl/ipl.facade';

const routes: Routes = [
  {
    path: '',
    component: IpldashboardTeamListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IpldashboardCoreModule,
    StoreModule.forFeature(fromIpl.IPL_FEATURE_KEY, fromIpl.reducer),
    EffectsModule.forFeature([IplEffects])
  ],
  declarations: [IpldashboardTeamListComponent, TeamGridComponent],
  providers: [IplFacade]
})
export class IpldashboardIplModule {}
