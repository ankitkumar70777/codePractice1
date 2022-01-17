import React from "react";
import { NavLink } from "react-router-dom";
import "../../all.css";

function HomeAndAbout({
  headline,
  productName,
  paragraphLine,
  navLinkBButtonText,
  imageName,
  classNamePFor,
}) {
  return (
    <>
      <div className="homeDiv">
        <div className="homeText">
          <h1>
            {headline} <span>{productName}</span>
          </h1>
          <p className={classNamePFor == "home" ? "homeTextP" : ""}>
            {paragraphLine}
          </p>

          <div>
            <button>
              <NavLink to="/service">{navLinkBButtonText}</NavLink>
            </button>
          </div>
        </div>
        <div className="homeImage">
          <img src={imageName} className="mernImage" />
        </div>
      </div>
    </>
  );
}

export default HomeAndAbout;
