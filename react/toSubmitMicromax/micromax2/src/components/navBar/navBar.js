import React from "react";
import "./navBar.css";
import micromaxLogo from "../../media/svg/mmx-logo.svg";
import login from "../../media/svg/account.svg";
import cart from "../../media/svg/cart.svg";
import search from "../../media/svg/search.svg";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navContainer">
        <div className="navLogo">
          <a href="#">
            <img src={micromaxLogo} alt="micromax logo" />
          </a>
        </div>
        <div className="navItems">
          <a href="#">Mobile</a>
          <a href="#">Audio</a>
          <a href="#">Consumer Electronics</a>
          <a href="#">Feature Phones</a>
          <a href="#">Community</a>
          <a href="#">Support</a>
          <a href="#">
            <img src={login} alt="login logo" />
          </a>
          <a href="#">
            <img src={cart} alt="cart logo" />
          </a>
          <a href="#">
            <img src={search} alt="search logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
