import { createAction, props } from '@ngrx/store';
import { Team } from '@ipl/interfaces';

export const loadIpl = createAction('[Ipl] Load Ipl Teams');

export const loadIplSuccess = createAction(
  '[Ipl] Load Ipl Success',
  props<{ teams: Team[] }>()
);

export const loadIplFailure = createAction(
  '[Ipl] Load Ipl Failure',
  props<{ error: any }>()
);

export const selectIplTeam = createAction(
  'select IPL team',
  props<{ selectedId: string }>()
);
