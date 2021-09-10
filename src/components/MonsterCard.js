import React from 'react';
import PropTypes from 'prop-types';

const MonsterCard = (props) => {
  const { name, index, challenge } = props;

  return (
    <div id={index} className="col-6 rounded py-2 px-1 monster-card-style">
      <h4 className="challenge_rating as ChallengeRating } = props;-display-style">{challenge || ''}</h4>
      <h1 className="name-display-style black">{name || ''}</h1>
    </div>
  );
};

MonsterCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  challenge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
export default MonsterCard;
