import React, { useState } from "react";
import "./slideShow.css";
import leftArrow from "../../media/images/slideShowImages/left-arrow.png";
import rightArrow from "../../media/images/slideShowImages/right-arrow.png";
import slideShowDataArr from "./slideShowData";

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lengthOfSlideShowData = slideShowDataArr.length;

  // console.log({ currentSlide });
  // console.log({ lengthOfSlideShowData });

  const loadPreviousImage = () => {
    setCurrentSlide(
      currentSlide === 0 ? lengthOfSlideShowData - 1 : currentSlide - 1
    );
  };
  const loadNextImage = () => {
    setCurrentSlide(
      currentSlide === lengthOfSlideShowData - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div>
      <div className="slideShowImages">
        {slideShowDataArr.map((v, i) => {
          return i === currentSlide && <img src={v.src} alt="airFunk1" />;
        })}

        <a className="leftArrow" onClick={loadPreviousImage}>
          <img src={leftArrow} alt="leftArrow" />
        </a>

        <a className="rightArrow" onClick={loadNextImage}>
          <img src={rightArrow} alt="rightArrow" />
        </a>
      </div>
    </div>
  );
}

export default SlideShow;
