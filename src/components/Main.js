import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setMonsters, getFiltered, receiveMonsterDetails } from '../redux/monsters';
import MonsterCard from './MonsterCard';
import getMonsters from '../api';

const MainMonstersList = (props) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const monstersList = useSelector((state) => state.monsterReducer.monsters);
  const monsters = async () => {
    const potato = await getMonsters();
    dispatch(setMonsters(potato));
  };
  useEffect(() => {
    monsters();
  }, []);

  return (
    <div className="main">
      <div className="navbar">
        <h1 className="navbar-title ps-2 mb-0">D&D</h1>
        <input type="text" className="filter-input mx-auto" id="FilterInput" placeholder="Enter text" />
        <button
          type="button"
          className="btn btn-main-style border-end"
          onClick={(e) => {
            props.getFiltered(e.target.previousSibling.value.toLowerCase());
            setFilter(e.target.previousSibling.value.toLowerCase());
          }}
        >
          Filter
        </button>
        <Link to="/" className="btn btn-main-style" onClick={() => { props.getFiltered(''); setFilter(''); document.getElementById('FilterInput').value = ''; }}>Reset</Link>
      </div>
      <div className="mx-auto p-0 monster-container-style">
        {monstersList.length === 1 && (
          <div className="mx-auto text-center monster-card-light monster-details-style">
            <Link to="/" className="btn btn-default btn-back-style" onClick={() => { props.getFiltered(filter); }}>
              {'<'}
            </Link>
            <MonsterCard
              key={monstersList[0].id}
              index={monstersList[0].id}
              name={monstersList[0].name}
              size={monstersList[0].size || ''}
              type={monstersList[0].type || ''}
              alignment={monstersList[0].alignment || ''}
              hit_points={monstersList[0].hit_points || 0}
              hit_dice={monstersList[0].hit_dice || ''}
              challenge={monstersList[0].challenge}
            />
          </div>
        )}
        {monstersList.length > 1 && monstersList.map((monster, index) => (
          <div key={monster.id} className={`col-6 ${index % 4 === 0 || index % 4 === 3 ? 'monster-card-dark' : 'monster-card-light'} py-2 px-auto monster-card-style d-inline-flex`}>
            <Link
              key={monster.id}
              id={`${monster.id}-link`}
              to={{
                pathname: `/monsters/${monster.id}`,
                itemProps: {
                  index: monster.id,
                  name: monster.name,
                },
              }}
              className="mx-auto link-style"
              onClick={(e) => {
                props.receiveMonsterDetails(e.target.id);
              }}
            >
              <MonsterCard
                key={monster.id}
                index={monster.id}
                name={monster.name}
                challenge={monster.challenge}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  monsters: state.monsters,
});

const mapDispatchToProps = (dispatch) => ({
  setMonsters: () => dispatch(setMonsters),
  getFiltered: (filter) => dispatch(getFiltered(filter)),
  receiveMonsterDetails: (index) => dispatch(receiveMonsterDetails(index)),
});

MainMonstersList.propTypes = {
  getFiltered: PropTypes.func.isRequired,
  receiveMonsterDetails: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMonstersList);
