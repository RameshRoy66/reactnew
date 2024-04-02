/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <nav id="sidebar" className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
      <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="bi bi-speedometer" />Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-box2" />Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bag-check" />Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-people-fill" />Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link drop" href="#collapseExample" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">
                <i class="bi bi-flag"></i>Dropdown <i className="bi bi-chevron-down" /> 
                </a>
                <div className="collapse" id="collapseExample">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      <i class="bi bi-0-circle"></i>Submenu Item 1</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      <i class="bi bi-6-square"></i>Submenu Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../../pages/home.jsx">
                  <i className="bi bi-people" />ramesh</a>
              </li>
            </ul>
    </nav>
  );
}

export default Sidebar;
