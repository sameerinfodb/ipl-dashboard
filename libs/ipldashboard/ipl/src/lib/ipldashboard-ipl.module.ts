import { RouterModule, Routes } from '@angular/router';
import { IpldashboardCoreModule } from './../../../core/src/lib/ipldashboard-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpldashboardTeamListComponent } from './container/ipldashboard-team-list/ipldashboard-team-list.component';
import { TeamGridComponent } from './components/team-grid/team-grid.component';

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
    IpldashboardCoreModule
  ],
  declarations: [IpldashboardTeamListComponent, TeamGridComponent]
})
export class IpldashboardIplModule {}
