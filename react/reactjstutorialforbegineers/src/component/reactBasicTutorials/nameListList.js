import React from "react";

export default function NameListList(props) {
  return (
    <li>
      {props.car.color} {props.car.type} {props.car.capacity}
    </li>
  );
}
