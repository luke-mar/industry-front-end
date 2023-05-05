import React from "react";
import ReactDom from "react-dom";
import "../Modal/Modal.scss";
import Exit from "../../Assets/Exit.png";

function WarehouseModal({ open, onClose, handler }) {
  return ReactDom.createPortal(
    <div className="overlayStyle">
      <div className="modalStyle">
        <div className="modalContainer">
          <span onClick={onClose}>
            <img src={Exit} alt="close window" className="modal__close" />
          </span>
          <h1 className="modalTitle">Event Review</h1>

          <p className="modalText">
            Please take a moment to leave a review for last month's team event.
            Your feedback helps us plan better building opportunities for the
            team.
          </p>
          <div className="buttonContainer">
            <button onClick={onClose} className="modalButton modalButton-close">
              <p className="modalButton__text--close">Remind Me Later</p>
            </button>
            <button
              onClick={handler}
              className="modalButton modalButton-survey"
            >
              <p className="modalButton__text--survey">Ok</p>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default WarehouseModal;
