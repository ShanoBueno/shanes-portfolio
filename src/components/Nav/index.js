import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      </div>
    </div>
  );
}

export default Nav;