import React from 'react'
import {Outlet, Link } from "react-router-dom";


export default function navbar() {
  return (
    <div className=''>
        <nav className="navbar navbar-expand-lg bg-warning  fixed-top">
  <div className="container">
    <a className="navbar-brand" href="/">
    {/* <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1711782241~exp=1711785841~hmac=a50594a9742ec680446c90cd25a67221f5a4e7e5a7ca5038b8ca30fd0b0b814a&w=740" 
    alt="" width={40} /> */}Ramesh Roy
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <i class="bi bi-balloon-heart"></i>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">Offcanvas Menu</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
            {/* <a className="nav-link" href="/">Home</a> */}
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
            {/* <a className="nav-link" href="About">About</a> */}
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Services">Services</Link>
            {/* <a className="nav-link" href="Services">Services</a> */}
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
            {/* <a className="nav-link" href="Contact">Contact</a> */}
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<Outlet></Outlet>

    </div>
  )
}
