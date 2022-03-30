import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__cancelbutton">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal__title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="modal__body">
          <p>Verify Your Email id in the next step</p>
        </div>
        <div className="modal__footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;