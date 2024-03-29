import React from "react";
import "../assets/css/Nav.css";

function Navbar() {
  return (
    <nav>
      <div className="nav">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <img
          className="nav_avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />

        {/* <div>
          <ul className="navbar">
            <li>
              <a href="/"></a>Home
            </li>
            <li>
              <a href="./movies"></a>TV Shows
            </li>
            <li>
              <a href="./movies"></a>Movies
            </li>
            <li>
              <a href="./movies"></a>My List
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
