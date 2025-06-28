import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbarList">
        <li className="row">
          <Link to="/" className="title">Dom</Link>
        </li>
        <li className="row">
          <Link to="/essays" className="title">Notki</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;