import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/" className="me-3">
        Home
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
