import RETRIEVE_MONSTERS from './types';
import getMonsters from '../api';

const setMonsters = (monsters) => ({
  type: RETRIEVE_MONSTERS,
  payload: monsters,
});

const getFiltered = (filter = '') => (dispatch) => {
  getMonsters().then((monsters) => {
    monsters.filter((monster) => monster.name.include(filter));
    dispatch({
      type: RETRIEVE_MONSTERS,
      payload: monsters,
    });
  });
};

const receiveMonsters = () => (dispatch) => {
  // eslint-disable-next-line no-debugger
  debugger;
  getMonsters().then((monsters) => {
    dispatch(setMonsters(monsters));
  });
};

export { receiveMonsters, getFiltered };
