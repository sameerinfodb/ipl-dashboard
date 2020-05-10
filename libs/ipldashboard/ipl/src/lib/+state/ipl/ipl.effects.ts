import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { TeamService } from '@ipl/api-services';
import * as IplActions from './ipl.actions';

@Injectable()
export class IplEffects {
  loadIpl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IplActions.loadIpl),
      fetch({
        run: action => {
          let data;

          this.apiService.searchTeam().subscribe(response => {
            data = response;
            console.log(response);
          });

          console.log(data);
          // Your custom service 'load' logic goes here. For now just return a success action...
          return IplActions.loadIplSuccess({});
        },

        onError: (action, error) => {
          console.error('Error', error);
          return IplActions.loadIplFailure({ error });
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private readonly apiService: TeamService
  ) {}
}
