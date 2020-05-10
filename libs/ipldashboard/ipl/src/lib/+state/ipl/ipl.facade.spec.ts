import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { IplEntity } from './ipl.models';
import { IplEffects } from './ipl.effects';
import { IplFacade } from './ipl.facade';

import * as IplSelectors from './ipl.selectors';
import * as IplActions from './ipl.actions';
import { IPL_FEATURE_KEY, State, initialState, reducer } from './ipl.reducer';

interface TestSchema {
  ipl: State;
}

describe('IplFacade', () => {
  let facade: IplFacade;
  let store: Store<TestSchema>;
  const createIplEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as IplEntity);

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
            ipl: [createIplEntity('AAA'), createIplEntity('BBB')]
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
