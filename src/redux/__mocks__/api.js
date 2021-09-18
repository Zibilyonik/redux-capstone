import monstersList from './monsters';

const RETRIEVE_MONSTERS = 'monsterStore/monsters/RETRIEVE_MONSTERS';

export const setMonsters = (monstersList) => ({
  type: RETRIEVE_MONSTERS,
  monstersList,
});

export const getMonsters = () => (dispatch) => {
  dispatch(setMonsters(monstersList));
  return monstersList;
};
