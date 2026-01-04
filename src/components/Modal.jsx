import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-1/2 h-[80vh] bg-black bg-opacity-75"></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
