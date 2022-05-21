import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../../login/LogoutButton";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div></div>

        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/dashboard">
          Dashboard
        </Link>

        <LogoutButton />

        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
