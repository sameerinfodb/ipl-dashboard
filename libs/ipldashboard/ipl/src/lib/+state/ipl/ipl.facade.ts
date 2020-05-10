import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromIpl from './ipl.reducer';
import * as IplSelectors from './ipl.selectors';

@Injectable()
export class IplFacade {
  loaded$ = this.store.pipe(select(IplSelectors.getIplLoaded));
  allIpl$ = this.store.pipe(select(IplSelectors.getAllIpl));
  selectedIpl$ = this.store.pipe(select(IplSelectors.getSelected));

  constructor(private store: Store<fromIpl.IplPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
