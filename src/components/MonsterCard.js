import React from 'react';
import PropTypes from 'prop-types';
import './MonsterCard.scss';

const MonsterCard = (props) => {
  const {
    name, index, size, alignment, hit_dice: hitDice, hit_points: hitPoints, challenge,
  } = props;

  return (
    <div className="monster-card-container text-center">
      <p id={index} className="w-100 name-display-style">{name || ''}</p>
      <p className="w-100">{`Challenge Rating: ${challenge || ''}`}</p>
      <div className="details-container" display="none">
        <p className="w-100 name-display-style">{size || ''}</p>
        <p className="w-100 name-display-style">{alignment || ''}</p>
        <p className="w-100 name-display-style">{hitDice || ''}</p>
        <p className="w-100 name-display-style">{hitPoints || ''}</p>
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
