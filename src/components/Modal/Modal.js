import React, { useState } from "react";
import ReactDom from "react-dom";
import "../Modal/Modal.scss";
// import { ReactComponent as X } from "../../assets/icons/close-24px.svg";

function WarehouseModal({ open, onClose, handler }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="overlayStyle">
      <div className="modalStyle">
        {/* <X onClick={onClose} /> */}
        <div className="modalContainer">
          <h1 className="modalTitle">Event Review</h1>
          <p className="modalText">
            Please take a moment to leave a review for last month's team event.
            Your feedback helps us plan better building opportunities for the
            team.
          </p>
          <div className="buttonContainer">
            <button onClick={onClose} className="modalButton">
              Remind Me Later
            </button>
            <button
              onClick={handler}
              className="modalButton modalButton-delete"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default WarehouseModal;
