import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { IplEffects } from './ipl.effects';
import * as IplActions from './ipl.actions';

describe('IplEffects', () => {
  let actions: Observable<any>;
  let effects: IplEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        IplEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.inject(IplEffects);
  });

  describe('loadIpl$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: IplActions.loadIpl() });

      const expected = hot('-a-|', {
        a: IplActions.loadIplSuccess({ teams: [] })
      });

      expect(effects.loadIpl$).toBeObservable(expected);
    });
  });
});
