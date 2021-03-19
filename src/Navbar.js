import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info flex-container">
      <div>
        <Link to="/">
          <a className="navbar-brand navbar-color">Contact Book</a>
        </Link>
      </div>
      <div>
        <Link to="/create/contact" className="navbar-brand">
          <button class="button">Create Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
