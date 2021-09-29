import RETRIEVE_MONSTERS from '../types';

const initialState = {
  filter: '',
  monsters: [],
};

function monsterReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_MONSTERS:
      return { ...state, monsters: payload };

    default:
      return state;
  }
}

export default monsterReducer;
