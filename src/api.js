import axios from 'axios';

const MONSTER_URL = 'https://www.dnd5eapi.co/api/monsters';

const getMonsters = async () => {
  const monsters = [];
  const result = await axios.get(MONSTER_URL);
  const data = result.data.results;
  data.forEach((item) => {
    const monster = {
      id: item.index,
      name: item.name,
    };
    monsters.push(monster);
  });
  console.log(monsters);
  return monsters;
};

export const getMonster = async (id) => {
  const result = await axios.get(`https://www.dnd5eapi.co/api/monsters/${id}/`);
  const { data } = result;
  const tempArr = [];
  tempArr.push(data);
  console.log(data);
  return tempArr;
};

export default getMonsters;
