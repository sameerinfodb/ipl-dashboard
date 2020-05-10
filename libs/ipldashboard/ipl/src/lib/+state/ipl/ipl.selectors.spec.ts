import { IplEntity } from './ipl.models';
import { State, iplAdapter, initialState } from './ipl.reducer';
import * as IplSelectors from './ipl.selectors';

describe('Ipl Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getIplId = it => it['id'];
  const createIplEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as IplEntity);

  let state;

  beforeEach(() => {
    state = {
      ipl: iplAdapter.addAll(
        [
          createIplEntity('PRODUCT-AAA'),
          createIplEntity('PRODUCT-BBB'),
          createIplEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Ipl Selectors', () => {
    it('getAllIpl() should return the list of Ipl', () => {
      const results = IplSelectors.getAllIpl(state);
      const selId = getIplId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = IplSelectors.getSelected(state);
      const selId = getIplId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getIplLoaded() should return the current 'loaded' status", () => {
      const result = IplSelectors.getIplLoaded(state);

      expect(result).toBe(true);
    });

    it("getIplError() should return the current 'error' state", () => {
      const result = IplSelectors.getIplError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
