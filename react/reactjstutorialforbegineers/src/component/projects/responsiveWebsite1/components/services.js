import React from "react";
import "../all.css";
import CardsServices from "./commonComponent/cards";
import CardDataArr from "./commonComponent/cardsContent";

function Service() {
  return (
    <div>
      <h1 className="servicesCenter">Our Services</h1>
      <div className="cardsServicesParent">
        {CardDataArr.map((v, i) => {
          return <CardsServices key={i} title={v.title} image={v.image} />;
        })}
      </div>
    </div>
  );
}

export default Service;
