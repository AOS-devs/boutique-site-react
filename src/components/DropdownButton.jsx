import React, { useState } from "react";

const DropdownButton = ({ bgColor, onBtnClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
    onBtnClick(isOpen)
  };
  return (
    <button
      onClick={handleDropdownClick}
      className="cursor-pointer w-8 h-8 flex items-center justify-center"
    >
      <span
        className={`bg-${bgColor ? bgColor : "inherit"} w-4 h-[1.3px]`}
      ></span>
      <span
        className={`bg-${
          bgColor ? bgColor : "inherit"
        } w-[1.3px] h-4 origin-center translate-x-[-9px] transition-transform ${
          isOpen ? "rotate-90 " : ""
        }`}
      ></span>
    </button>
  );
};

export default DropdownButton;
