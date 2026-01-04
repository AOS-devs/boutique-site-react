import React, { useEffect } from "react";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-[30px] left-0 w-full h-screen z-20 bg-black opacity-75"
      onClick={props.onClose}
    />
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

const Modal = (props) => {
  const { isOpen, onClose } = props;
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      {ReactDOM.createPortal(
        isOpen && <Backdrop onClose={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {}
    </>
  );
};

export default Modal;

/* .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
}

.modal {
    position: fixed;
    top: 20vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
} */
