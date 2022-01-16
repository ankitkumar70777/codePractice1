import React from "react";
import "../../App.css";

const modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div>
      <div className="modal" onClick={props.onClose}>
        <div
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-header">
            <h2>modal header</h2>
          </div>

          <div className="modal-body">modal body</div>

          <div className="modal-footer">
            <button onClick={props.onClose}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
