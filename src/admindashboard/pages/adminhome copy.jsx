/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../admincss/admin.css';

export default function Adminhome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  
 
  ;

  return (
    <div>
      <div>
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
        <div className="margintop">
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
                  Dropdown <i className="bi bi-chevron-down" /> 
                </a>
                <div className="collapse" id="collapseExample">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Submenu Item 1</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Submenu Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
            <h1>Main Content</h1>
            <i className="bi bi-sun" />
            <button className="navbar-toggler" type="button" onClick={toggleSidebar} id="">☰</button>
            <p>This is your main content area. Replace this with your actual content.</p>
            <p>Scroll down to see the sidebar fade out.</p>
            <div style={{ height: 1500 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
