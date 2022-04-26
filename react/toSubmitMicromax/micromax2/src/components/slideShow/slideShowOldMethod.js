import React, { useState } from "react";
import "./slideShow.css";
import airfunk1 from "../../media/images/slideShowImages/1.png";
import airfunk2 from "../../media/images/slideShowImages/2.png";
import noHangPhone from "../../media/images/slideShowImages/3.png";
import inNote2 from "../../media/images/slideShowImages/4.png";
import leftArrow from "../../media/images/slideShowImages/left-arrow.png";
import rightArrow from "../../media/images/slideShowImages/right-arrow.png";
const imageArray = [airfunk1, airfunk2, noHangPhone, inNote2];

console.log({ noHangPhone });

function SlideShow() {
  const [slideImage, setSlideImage] = useState(0);

  const lengthOfImageArray = imageArray.length;

  console.log({ lengthOfImageArray });
  // console.log({ imageArray });
  console.log({ slideImage });

  const changeImage = (item, action) => {
    console.log("-------------", { item });
    // setSlideImage(item);
    if (action == "plus") {
      item == lengthOfImageArray ? setSlideImage(0) : setSlideImage(item);
    }
    if (action == "minus") {
      console.log("in minus");
       item == lengthOfImageArray ? setSlideImage(lengthOfImageArray-1) : setSlideImage(item);
    }
    
  };

  return (
    <div>
      <div className="slideShowImages">
        <img src={imageArray[slideImage]} alt="airFunk1" />
        <a
          className="leftArrow"
          onClick={() => {
            changeImage(
              slideImage == 0 ? lengthOfImageArray : slideImage - 1,
              "minus"
            );
          }}
        >
          <img src={leftArrow} alt="leftArrow" />
        </a>

        <a
          className="rightArrow"
          onClick={() => {
            changeImage(
              slideImage == lengthOfImageArray ? 0 : slideImage + 1,
              "plus"
            );
          }}
        >
          <img src={rightArrow} alt="rightArrow" />
        </a>
      </div>
    </div>
  );
}

export default SlideShow;
