import React from "react";
import top11 from "../media/images/top11.png";
import mern from "../media/images/mern.jpeg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <section id="header" className="">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Grow your business with <strong>Ankitkumar</strong>
                </h1>
                <h2 className="my-3">
                  we are the team of talanted develper making websites
                </h2>
                <div className="mt-3">
                  <a href="#" className="btn-get-started">
                    Get started
                  </a>
                </div>
                <div>
                  <img src={top11} alt="Home img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="homeDiv">
        <div className="homeText">
          <h1>
            Grow Your Business with <span>AWS</span>
          </h1>
          <p>We are the team of highly taanted developer</p>
          <div>
            <button>
              <NavLink to="/service">Get Started</NavLink>
            </button>
          </div>
        </div>
        <div className="homeImage">
          <img src={mern} className="mernImage" />
        </div>
      </div>
    </>
  );
}

export default Home;
