import React from 'react';
import PropTypes from 'prop-types';
import './MonsterCard.css';

const MonsterCard = (props) => {
  const {
    name, index, size, alignment, hit_dice: hitDice, hit_points: hitPoints, challenge,
  } = props;

  return (
    <div className="monster-card-container">
      <p id={index} className=" name-display-style">{name || ''}</p>
      <p className="challenge-style">{`Challenge Rating: ${challenge || ''}`}</p>
      <div className="details-container">
        <p className="name-details-style">{`Size: ${size || ''}`}</p>
        <p className="name-details-style">{`Alignment: ${alignment || ''}`}</p>
        <p className="name-details-style">{`Hit Dice: ${hitDice || ''}`}</p>
        <p className="name-details-style">{`Hit Points: ${hitPoints || ''}`}</p>
      </div>
    </div>
  );
};

MonsterCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  size: PropTypes.string,
  alignment: PropTypes.string,
  hit_dice: PropTypes.string,
  hit_points: PropTypes.number,
  challenge: PropTypes.string.isRequired,
};

MonsterCard.defaultProps = {
  size: '',
  alignment: '',
  hit_dice: '',
  hit_points: 0,
};

export default MonsterCard;
