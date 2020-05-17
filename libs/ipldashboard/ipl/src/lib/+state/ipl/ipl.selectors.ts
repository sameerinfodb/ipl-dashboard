import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IPL_FEATURE_KEY,
  TeamState,
  IplPartialState,
  iplAdapter
} from './ipl.reducer';

// Lookup the 'Ipl' feature state managed by NgRx
export const getTeamState = createFeatureSelector<IplPartialState, TeamState>(
  IPL_FEATURE_KEY
);

const { selectAll, selectEntities } = iplAdapter.getSelectors();

export const getTeamsLoaded = createSelector(
  getTeamState,
  (state: TeamState) => state.loaded
);

export const getIplError = createSelector(
  getTeamState,
  (state: TeamState) => state.error
);

export const getAllIplTeams = createSelector(getTeamState, (state: TeamState) =>
  selectAll(state)
);

export const getSelectedIplTeam = createSelector(
  getTeamState,
  (state: TeamState) => selectEntities(state)
);

export const getSelectedTeamId = createSelector(
  getTeamState,
  (state: TeamState) => state.selectedId
);

export const getSelected = createSelector(
  getAllIplTeams,
  getSelectedTeamId,
  (entities, selectedId) => {
    console.log('test');
    return selectedId && entities[selectedId];
  }
);
