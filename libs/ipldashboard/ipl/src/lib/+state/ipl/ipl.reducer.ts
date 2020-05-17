import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as IplActions from './ipl.actions';

import { Team } from '@ipl/interfaces';

export const IPL_FEATURE_KEY = 'ipl';

export interface TeamState extends EntityState<Team> {
  selectedId?: string | number; // which Ipl record has been selected
  loaded: boolean; // has the Ipl list been loaded
  error?: string | null; // last none error (if any)
}

export interface IplPartialState {
  readonly [IPL_FEATURE_KEY]: TeamState;
}

export const iplAdapter: EntityAdapter<Team> = createEntityAdapter<Team>();

export const initialState: TeamState = iplAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const iplReducer = createReducer(
  initialState,
  on(IplActions.loadIpl, state => ({ ...state, loaded: false, error: null })),
  on(IplActions.loadIplSuccess, (state, { teams }) =>
    iplAdapter.setAll(teams, { ...state, loaded: true })
  ),
  on(IplActions.loadIplFailure, (state, { error }) => ({ ...state, error })),
  on(IplActions.selectIplTeam, (state, { selectedId }) => ({
    ...state,
    selectedId
  }))
);

export function reducer(state: TeamState | undefined, action: Action) {
  return iplReducer(state, action);
}
