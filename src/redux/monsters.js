import RETRIEVE_MONSTERS from './types';
import getMonsters from '../api';

export const receiveMonsters = () => (dispatch) => {
  const result = getMonsters();
  dispatch({
    type: RETRIEVE_MONSTERS,
    payload: result,
  });
};

export const getFiltered = (filter = '') => (dispatch) => {
  const baseResult = getMonsters();
  const result = baseResult.filter((monster) => monster.name.include(filter));
  dispatch({
    type: RETRIEVE_MONSTERS,
    payload: result,
  });
};
