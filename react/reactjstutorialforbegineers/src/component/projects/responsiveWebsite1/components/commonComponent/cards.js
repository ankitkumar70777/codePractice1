import React from "react";

function CardsServices({ title, image }) {
  return (
    <div className="cardsServices">
      <img src={image} />
      <h4>{title}</h4>
      <p>
        card text card text card text card text card text card text card text
        card text
      </p>
      <button>Checkout more</button>
    </div>
  );
}

export default CardsServices;
