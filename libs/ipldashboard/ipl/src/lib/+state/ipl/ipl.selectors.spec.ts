import { Team } from '@ipl/interfaces';
import { initialState, iplAdapter } from './ipl.reducer';
import * as IplSelectors from './ipl.selectors';

describe('Ipl Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getIplId = it => it['id'];
  const createIplEntity = (id: string, name = '', shortCode = '') =>
    ({
      id,
      name: name || `name-${id}`,
      shortCode: shortCode
    } as Team);

  let state;

  beforeEach(() => {
    state = {
      ipl: iplAdapter.setAll(
        [
          createIplEntity('1', 'Kolkata Knight Riders', 'KKR'),
          createIplEntity('2', 'Chennai Super Kings', 'CSK'),
          createIplEntity('3', 'Kings XI Punjab', 'KXIP')
        ],
        {
          ...initialState,
          selectedId: '1',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Ipl Selectors', () => {
    it('getAllIpl() should return the list of Ipl', () => {
      const results = IplSelectors.getAllIplTeams(state);
      const selId = getIplId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = IplSelectors.getSelected(state);
      const selId = getIplId(result);

      expect(selId).toBe('1');
    });

    it("getIplLoaded() should return the current 'loaded' status", () => {
      const result = IplSelectors.getTeamsLoaded(state);

      expect(result).toBe(true);
    });

    it("getIplError() should return the current 'error' state", () => {
      const result = IplSelectors.getIplError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
