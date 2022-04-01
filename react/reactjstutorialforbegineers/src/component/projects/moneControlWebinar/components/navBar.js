import React from "react";
import mcproMastervirtual from "../media/mcpro_mastervirtual.png";
import LoginSvg from "./svg/login/loginSvg";
import SideMenu from "./svg/sideMenu/sideMenu";
import "./navBar.css";

function NavBarWebinar() {
  return (
    <div className="navBarMoneyControlWebinar">
      <div className="webinarLogo">
        <h1>
          <a href="https://www.moneycontrol.com/">
            <img src={mcproMastervirtual} />
          </a>
        </h1>
        <div>A series of online summits featuring leaders and experts</div>
      </div>
      <div>
        <div>
          <div>
            <LoginSvg />
            <span className="">Login</span>
          </div>
          <div>
            <SideMenu />
          </div>
        </div>
        <div>
          <a href="#"> Upcoming Webinar</a>
          <a href="#">Past Webinars</a>
          <a href="#"> Meet Our Speakers</a>
          <a href="#"> Testimonials</a>
          <a href="#"> About PRO Master Virtual</a>
          <a href="#">FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default NavBarWebinar;
