import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as IplActions from './ipl.actions';

import { Team } from '@ipl/interfaces';

export const IPL_FEATURE_KEY = 'ipl';

export interface State extends EntityState<Team> {
  selectedId?: string | number; // which Ipl record has been selected
  loaded: boolean; // has the Ipl list been loaded
  error?: string | null; // last none error (if any)
}

export interface IplPartialState {
  readonly [IPL_FEATURE_KEY]: State;
}

export const iplAdapter: EntityAdapter<Team> = createEntityAdapter<Team>({
  selectId: team => team.id
});

export const initialState: State = iplAdapter.getInitialState({
  selectId: null,
  loaded: false
});

const iplReducer = createReducer(
  initialState,
  on(IplActions.loadIpl, state => ({ ...state, loaded: false, error: null })),
  on(IplActions.loadIplSuccess, (state, { teams }) => ({ ...state, teams })),
  on(IplActions.loadIplFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return iplReducer(state, action);
}
