import React from "react";
import "../all.css";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          {/* <div className="col-10 mx-auto"> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand navFontSize" to="/">
                <strong>DevZone</strong>
              </NavLink>

              <div
                className="collapse navbar-collapse d-flex flex-row-reverse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className={(isActive) =>
                        isActive.isActive === true
                          ? "nav-link activeMenu navFontSize"
                          : "nav-link navFontSize"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact"
                      className={(isActive) =>
                        isActive.isActive === true
                          ? "nav-link activeMenu navFontSize"
                          : "nav-link navFontSize"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about"
                      className={(isActive) =>
                        isActive.isActive === true
                          ? "nav-link activeMenu navFontSize"
                          : "nav-link navFontSize"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={(isActive) =>
                        isActive.isActive === true
                          ? "nav-link activeMenu navFontSize"
                          : "nav-link navFontSize"
                      }
                      to="/service"
                    >
                      Service
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Navbar;
