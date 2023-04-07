import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <NavLink to="/">
              <h3 className="display-5">Indian Folk</h3>
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
