import { IPLDashboardAction } from './../../../../../core/src/lib/interfaces/action.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '@ipl/interfaces';
import { TeamService } from '@ipl/api-services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ipt-ipldashboard-team-list',
  templateUrl: './ipldashboard-team-list.component.html',
  styleUrls: ['./ipldashboard-team-list.component.scss']
})
export class IpldashboardTeamListComponent implements OnInit {
  public dataSource$: Observable<Team[]>;

  constructor(private readonly teamService: TeamService) {}

  ngOnInit(): void {
    this.dataSource$ = this.teamService.searchTeam();
    this.dataSource$ = this.dataSource$.pipe(tap(data => console.log(data)));
  }

  public doAction({ type, payload }: IPLDashboardAction) {
    switch (type) {
      case 'search':
        break;

      default:
        break;
    }
  }
}
