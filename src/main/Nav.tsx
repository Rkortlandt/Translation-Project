import react from 'react';
import './css/Nav.css';

export default function Nav () {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="navbar-menu">
          <ul>						
            <li><a href="#">Home</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
}