import axios from 'axios';

const MONSTER_URL = 'https://api.open5e.com/monsters/?limit=1100';
const getMonsters = async () => {
  const monsters = [];
  const result = await axios.get(MONSTER_URL);
  const data = result.data.results;
  data.forEach((item) => {
    const monster = {
      id: item.slug,
      name: item.name,
      challenge: item.challenge_rating,
    };
    monsters.push(monster);
  });
  return monsters;
};

export const getMonster = async (id) => {
  const result = await axios.get(`https://api.open5e.com/monsters/${id}/`);
  const { data } = result;
  data.id = data.slug;
  data.challenge = data.challenge_rating;
  const tempArr = [];
  tempArr.push(data);
  return tempArr;
};

export default getMonsters;
