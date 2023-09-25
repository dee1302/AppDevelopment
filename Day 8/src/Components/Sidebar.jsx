import React from 'react';
import '../Assets/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>E-medic</h3>
      </div>
      <ul className="sidebar-menu">
      <Link to="/homepage"><li>Home</li></Link>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;