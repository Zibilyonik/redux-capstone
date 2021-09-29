import reducer from './monsters';
import monstersList from '../__mocks__/monsters';
import RETRIEVE_MONSTERS from '../types';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      filter: '',
      monsters: [],
    },
  );
});
it('returns the monster', () => {
  const initialState = {
    filter: '',
    monsters: [],
  };
  const action = {
    type: RETRIEVE_MONSTERS,
    payload: monstersList,
  };
  const stateNew = reducer(initialState, action);
  expect(stateNew.monsters.length).toBe(1);
});
