import { React } from 'react';
import FilterLayout from './FilterLayout';

const Navbar = (title) => (
  <div className="navbar">
    <h1 className="navbar-title">
      {title}
    </h1>
    <FilterLayout />
  </div>
);

export default Navbar;
