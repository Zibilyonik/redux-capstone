import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveMonsters, getFiltered } from '../redux/monsters';
import MonsterCard from './MonsterCard';
/* eslint-disable */
const MainMonstersList = (props) => {
  debugger;
  const [filter, setFilter] = useState('');
  let monsters = receiveMonsters();
  return (
    <div className="main">
      <div className="navbar">
        <h1 className="navbar-title">D&D Monsters</h1>
        <input type="text" className="filter-input" id="FilterInput" placeholder="Enter text" />
        <button type="button" className="btn btn-default" onClick={(e) => { setFilter(e.target.previousSibling.innerText); props.getFiltered(filter); }}>Send</button>
      </div>
      <div className="mx-auto monster-container-style border-bottom row">
        {monsters.map((monster) => (
          <Link
            key={monster.index}
            to={{
              pathname: `/monsters/${monster.index}`,
              itemProps: {
                index: monster.index,
                name: monster.name,
              },
            }}
          >
            <MonsterCard
              key={monster.index}
              index={monster.index}
              name={monster.name}
              challenge={monster.challenge}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  monsters: state.monsters,
});

const mapDispatchToProps = (dispatch) => ({
  receiveMonsters: () => dispatch(receiveMonsters),
  getFiltered: (filter) => dispatch(getFiltered(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMonstersList);
