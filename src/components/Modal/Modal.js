import React, { useState } from "react";
import ReactDom from "react-dom";
import "../Modal/Modal.scss";
// import { ReactComponent as X } from "../../assets/icons/close-24px.svg";

function WarehouseModal({ open, onClose, handler, warehouse_name }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="overlayStyle">
      <div className="modalStyle">
        {/* <X onClick={onClose} /> */}
        <div className="modalContainer">
          <h1 className="modalTitle">Delete {warehouse_name} warehouse?</h1>
          <p className="modalText">
            Please confirm that you'd like to delete the {warehouse_name} from
            the list of warehouses. You won't be able to undo this action.
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
