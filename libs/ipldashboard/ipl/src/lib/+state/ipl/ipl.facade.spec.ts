import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import * as IplActions from './ipl.actions';
import { IplEffects } from './ipl.effects';
import { IplFacade } from './ipl.facade';

import { IPL_FEATURE_KEY, reducer, TeamState } from './ipl.reducer';
import { Team } from '@ipl/interfaces';

interface TestSchema {
  // #region Properties (1)

  ipl: TeamState;

  // #endregion Properties (1)
}

describe('IplFacade', () => {
  let facade: IplFacade;
  let store: Store<TestSchema>;
  const createIplEntity = (id: string, name = '', shortCode = '') =>
    ({
      id,
      name: name || `name-${id}`,
      shortCode: shortCode
    } as Team);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(IPL_FEATURE_KEY, reducer),
          EffectsModule.forFeature([IplEffects])
        ],
        providers: [IplFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(IplFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allIpl$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(IplActions.loadIpl());

        list = await readFirst(facade.allIpl$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadIplSuccess` to manually update list
     */
    it('allIpl$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allIpl$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          IplActions.loadIplSuccess({
            teams: [
              createIplEntity('1', 'Kolkata Knight Riders', 'KKR'),
              createIplEntity('2', 'Chennai Super Kings', 'CSK'),
              createIplEntity('3', 'Kings XI Punjab', 'KXIP')
            ]
          })
        );

        list = await readFirst(facade.allIpl$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
