import TestRenderer from 'react-test-renderer';
import MonsterCard from './MonsterCard';

const monstersList = {
  name: 'Aboleth',
  size: 'Large',
  type: 'aberration',
  alignment: 'lawful evil',
  hit_points: 135,
  hit_dice: '18d10+36',
  index: 'aboleth',
  challenge: '10',
};
it('checks if the values are received', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderer = TestRenderer.create(<MonsterCard {...monstersList} />);
  const testInstance = renderer.root;

  expect(testInstance.props.hit_dice).toBe('18d10+36');
});
