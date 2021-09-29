import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import getMonsters from '../api';
import { setMonsters } from '../redux/monsters';
import monstersList from '../redux/__mocks__/monsters';

function fetchData() {
  return (dispatch) => getMonsters()
    .then((monsters) => dispatch(setMonsters(monsters)));
}

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);
const initialState = {
  filter: '',
  monsters: [...monstersList],
};
const store = mockStore(initialState);

describe('mapDispatchToProps', () => {
  it('should change state for Main list', async () => store.dispatch(fetchData())
    .then(() => {
      const state = store.getState();
      expect(state).toEqual({ filter: '', monsters: [...monstersList] });
    }));
});
