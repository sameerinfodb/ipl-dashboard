import * as IplActions from '../../+state/ipl/ipl.actions';
import { IPLDashboardAction } from './../../../../../core/src/lib/interfaces/action.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '@ipl/interfaces';
import { tap } from 'rxjs/operators';
import { IplFacade } from '../../+state/ipl/ipl.facade';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'ipt-ipldashboard-team-list',
  templateUrl: './ipldashboard-team-list.component.html',
  styleUrls: ['./ipldashboard-team-list.component.scss']
})
export class IpldashboardTeamListComponent implements OnInit {
  public dataSource$: Observable<Team[]>;
  public selectedTeamSource$: Observable<Dictionary<Team>>;

  constructor(private readonly iplFacade: IplFacade) {}

  ngOnInit(): void {
    this.iplFacade.loadAllTeams();

    this.dataSource$ = this.iplFacade.allIpl$;

    this.dataSource$ = this.dataSource$.pipe(tap(data => console.log(data)));
  }

  public doAction({ type, payload }: IPLDashboardAction) {
    switch (type) {
      case 'select IPL team':
        console.log('select IPL team', payload);
        this.iplFacade.selectTeamById(payload);
        this.selectedTeamSource$ = this.iplFacade.selectedIpl$;
        this.selectedTeamSource$.subscribe();
        break;

      default:
        break;
    }
  }
}
