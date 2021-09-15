import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setMonsters, getFiltered, receiveMonsterDetails } from '../redux/monsters';
import MonsterCard from './MonsterCard';
import getMonsters from '../api';

const MainMonstersList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
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
        <h1 className="navbar-title">D&D Monsters</h1>
        <input type="text" className="filter-input" id="FilterInput" placeholder="Enter text" />
        <button type="button" className="btn btn-default" onClick={(e) => { props.getFiltered(e.target.previousSibling.value.toLowerCase()); }}>Send</button>
        <Link to="/" className="btn btn-default" onClick={() => { props.getFiltered(''); }}>Reset</Link>
      </div>
      <div className="mx-auto p-0 monster-container-style row container">
        {monstersList.map((monster, index) => (
          <div key={monster.id} className={`col-6 ${index % 4 === 0 || index % 4 === 3 ? 'monster-card-dark' : 'monster-card-light'} py-2 px-auto monster-card-style d-inline-flex`}>
            <button type="button" className="btn btn-default" style={{ display: 'none' }} onClick={() => { history.push('/'); props.getFiltered(''); }}>Send</button>
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
                size={monster.size || ''}
                type={monster.type || ''}
                alignment={monster.alignment || ''}
                hit_points={monster.hit_points || 0}
                hit_dice={monster.hit_dice || ''}
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
