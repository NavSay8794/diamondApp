import React from "react";
import "./NavbarComponent.css";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigationbar">
      <div className="brand">Diamonds</div>
        <div className="nav-Links">
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/ornaments">Ornaments</Link>
          </div>
          <div className="nav-item">
            <Link to="/about">About</Link>
          </div>
        </div>
    </nav>
  );
};

export default Navigation;
