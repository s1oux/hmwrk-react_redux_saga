import React from 'react';
import { NavLink } from 'react-router-dom';

const notFound = () => (
  <div className="flex-center">
    <h3>page not found</h3>
    <NavLink to="/login">go to login page</NavLink>
  </div>
);

export default notFound;
