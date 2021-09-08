import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

const FilterLayout = (props) => {
  // const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    text: null,
    challenge_rating: null,
  });
  const title = props;
  const addFilterNavbar = (name) => {
    setFilter(name);
    // return name || challengeRatingText ? dispatch(addFilters(filterText)) : null;
  };
  return (
    <div className="navbar">
      <h1 className="navbar-title">
        {title}
      </h1>
      <input type="text" className="filter-input" id="FilterInput" placeholder="Enter text" onChange={(e) => setFilter(e.target.value)} />
      <button type="button" className="btn btn-default" onClick={addFilterNavbar(filter)}>Send</button>
    </div>
  );
};

export default FilterLayout;
