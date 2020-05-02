import { TeamService } from '@ipl/api-services';
import { HttpClientModule } from '@angular/common/http';
import { IpldashboardUiModule } from './../../../ui/src/lib/ipldashboard-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modules = [CommonModule, HttpClientModule, IpldashboardUiModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [TeamService]
})
export class IpldashboardCoreModule {}
