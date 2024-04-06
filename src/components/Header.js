import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="test">Smith Technologies</h1>
      <div className="links">
        <nav>
          <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;