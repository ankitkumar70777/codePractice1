import React, { useState } from "react";
import smartPhoneData from "./smartPhoneData";
import "./smartPhones.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// className={`${style.before_login_element}`}

function SmartPhones() {
  const [currentPhone, setCurrentPhone] = useState(1);
  const firstImg = currentPhone - 1;
  const lastImg = currentPhone + 2;
  const smartArrLength = smartPhoneData.length;
  console.log({ currentPhone }, { firstImg }, { lastImg }, { smartArrLength });

  const nextImage = () => {
    setCurrentPhone(lastImg === smartArrLength - 1 ? 1 : currentPhone + 1);
  };

  const prevImage = () => {
    setCurrentPhone(firstImg === 0 ? smartArrLength - 3 : currentPhone - 1);
  };

  return (
    <div>
      <div className="smartPhoneHeading">
        <h2>Smartphones</h2>
      </div>
      <div className="smartPhoneBody">
        <div className="smartPhonesIcon">
          <FontAwesomeIcon
            icon={faAngleLeft}
            color="black"
            onClick={prevImage}
          />
        </div>
        <div className="smartPhonesSlider">
          {smartPhoneData.map((v, i) => {
            if (i >= firstImg && i <= lastImg) {
              return (
                <div className="simpleSmartPhone" key={v.id}>
                  <div>
                    <img
                      src={v.phonePhoneUrl}
                      alt={`phone  ${v.fullDetailLinkAndTitle}`}
                    />
                  </div>
                  <p> {v.fullDetailLinkAndTitle}</p>
                  <p>&#8377; {v.prise}</p>
                  <p>index: {i}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="smartPhonesIcon">
          <FontAwesomeIcon
            icon={faAngleRight}
            color="black"
            onClick={nextImage}
          />
        </div>
      </div>
    </div>
  );
}

export default SmartPhones;
