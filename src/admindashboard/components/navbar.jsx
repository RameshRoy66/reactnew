/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Admin Panel</a>
        <button className="navbar-toggler" type="button" onClick={toggleSidebar} id="">☰</button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
