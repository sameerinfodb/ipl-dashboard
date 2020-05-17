import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import * as fromActions from './ipl.actions';
import * as fromIpl from './ipl.reducer';
import * as IplSelectors from './ipl.selectors';

@Injectable()
export class IplFacade {
  loaded$ = this.store.pipe(select(IplSelectors.getTeamsLoaded));
  allIpl$ = this.store.pipe(select(IplSelectors.getAllIplTeams));
  selectedIpl$ = this.store.pipe(select(IplSelectors.getSelected));

  constructor(private store: Store<fromIpl.IplPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllTeams() {
    this.store.dispatch({ type: fromActions.loadIpl.type });
  }

  selectTeamById(id: string) {
    this.store.dispatch({
      type: fromActions.selectIplTeam.type,
      selectedId: id
    });
  }
}
