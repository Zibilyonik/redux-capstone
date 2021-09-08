import RETRIEVE_MONSTERS from '../types';

const initialState = [];

function monsterReducer(monsters = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_MONSTERS:
      return payload;

    default:
      return monsters;
  }
}

export default monsterReducer;
