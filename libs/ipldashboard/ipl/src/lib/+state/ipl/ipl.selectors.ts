import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IPL_FEATURE_KEY,
  State,
  IplPartialState,
  iplAdapter
} from './ipl.reducer';

// Lookup the 'Ipl' feature state managed by NgRx
export const getIplState = createFeatureSelector<IplPartialState, State>(
  IPL_FEATURE_KEY
);

const { selectAll, selectEntities } = iplAdapter.getSelectors();

export const getIplLoaded = createSelector(
  getIplState,
  (state: State) => state.loaded
);

export const getIplError = createSelector(
  getIplState,
  (state: State) => state.error
);

export const getAllIpl = createSelector(getIplState, (state: State) =>
  selectAll(state)
);

export const getIplEntities = createSelector(getIplState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getIplState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getIplEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
