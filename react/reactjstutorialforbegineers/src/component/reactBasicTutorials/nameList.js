import React from "react";
import NameListList from "./nameListList";

function NameList(props) {
  let cars = [
    {
      id: 1,
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
    {
      id: 2,
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
  ];

  const carList = cars.map((v) => {
    return <NameListList car={v} key={v.id} />;
  });

  console.log({ carList });

  return <ul>{carList}</ul>;
}

export default NameList;
