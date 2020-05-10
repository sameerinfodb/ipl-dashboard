import { createAction, props } from '@ngrx/store';
import { Team } from '@ipl/interfaces';
export const loadIpl = createAction('[Ipl] Load IPL Teams');

export const loadIplSuccess = createAction(
  '[Ipl] Load  IPL Teams Success',
  props<{ teams: Team[] }>()
);

export const loadIplFailure = createAction(
  '[Ipl] Load IPL Teams Failure',
  props<{ error: any }>()
);
