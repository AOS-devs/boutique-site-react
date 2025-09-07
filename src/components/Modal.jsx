import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full"
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
