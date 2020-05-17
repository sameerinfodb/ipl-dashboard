import * as IplActions from './ipl.actions';
import { TeamState, initialState, reducer } from './ipl.reducer';
import { Team } from '@ipl/interfaces';

describe('Ipl Reducer', () => {
  const createIplEntity = (id: string, name = '', shortCode = '') =>
    ({
      id,
      name: name || `name-${id}`,
      shortCode: shortCode
    } as Team);

  beforeEach(() => {});

  describe('valid Ipl actions', () => {
    it('loadIplSuccess should return set the list of known Ipl', () => {
      const teams = [
        createIplEntity('1', 'Kolkata Knight Riders', 'KKR'),
        createIplEntity('2', 'Chennai Super Kings', 'CSK'),
        createIplEntity('3', 'Kings XI Punjab', 'KXIP')
      ];
      const action = IplActions.loadIplSuccess({ teams });

      const result: TeamState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(3);
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
