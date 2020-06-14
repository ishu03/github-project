import React from 'react';

function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand text-white text-lg brand-text">
              <h1>
                <span className="highlight-orange">Git</span>
                <span className="highlight-green">Hub</span></h1>
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
