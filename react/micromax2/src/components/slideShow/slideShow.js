import React, { useState } from "react";
import "./slideShow.css";
import airfunk1 from "../../media/images/slideShowImages/1.png";
import airfunk2 from "../../media/images/slideShowImages/2.png";
import noHangPhone from "../../media/images/slideShowImages/3.png";
import inNote2 from "../../media/images/slideShowImages/4.png";
import leftArrow from "../../media/images/slideShowImages/left-arrow.png";
import rightArrow from "../../media/images/slideShowImages/right-arrow.png";

function SlideShow() {
  const [slideImage, setSlideImage] = useState(airfunk1);
  return (
    <div>
      <div className="slideShowImages">
        <img src={slideImage} alt="airFunk1" />
        <a>
          <img src={leftArrow} alt="leftArrow" className="leftArrow" />
          <img src={rightArrow} alt="rightArrow" className="rightArrow" />
        </a>
      </div>
      <div>indicator</div>
    </div>
  );
}

export default SlideShow;
