import { IplEntity } from './ipl.models';
import * as IplActions from './ipl.actions';
import { State, initialState, reducer } from './ipl.reducer';

describe('Ipl Reducer', () => {
  const createIplEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as IplEntity);

  beforeEach(() => {});

  describe('valid Ipl actions', () => {
    it('loadIplSuccess should return set the list of known Ipl', () => {
      const ipl = [
        createIplEntity('PRODUCT-AAA'),
        createIplEntity('PRODUCT-zzz')
      ];
      const action = IplActions.loadIplSuccess({ ipl });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
