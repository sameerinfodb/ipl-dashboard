import { TeamService } from './../../../../../../api-services/src/lib/team.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as fromIpl from './ipl.reducer';
import * as IplActions from './ipl.actions';

@Injectable()
export class IplEffects {
  loadIpl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IplActions.loadIpl),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.apiService
            .searchTeam()
            .pipe(
              map(response => IplActions.loadIplSuccess({ teams: response }))
            );
        },

        onError: (action, error) => {
          return null;
        }
      })
    )
  );

  constructor(private actions$: Actions, private apiService: TeamService) {}
}
