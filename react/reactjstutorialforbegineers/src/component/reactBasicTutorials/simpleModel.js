import React, { useState } from "react";
import "../App.css";

const Model2 = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">this is modal header</h4>
        </div>
        <div className="modal-body">this is modal body</div>
        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model2;
