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
  return monsters;
};

export default getMonsters;
