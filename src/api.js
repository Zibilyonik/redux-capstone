import axios from 'axios';

const MONSTER_URL = 'https://www.dnd5eapi.co/api/monsters';

const getMonsters = async () => {
  const monsters = [];
  const result = await axios.get(MONSTER_URL);
  if (result.status === 200) {
    const { data } = result;
    data.forEach((item) => {
      const monster = {
        id: item.index,
        name: item.name,
        size: item.size,
        type: item.type,
        alignment: item.alignment,
        challenge: item.challenge_rating,
      };
      monsters.push(monster);
    });
  }
  return monsters;
};

export default getMonsters;
