import React, { useState } from "react";
import DropdownButton from "./DropdownButton";

const MoreInfoTab = ({ title, content, fontSize, color }) => {
  const [isTabOpen, setIsTabOpen] = useState(false)

  const dropDownBtnHandler = (isOpen) => {
    setIsTabOpen(isOpen)
  }

  return (
    <div className="flex flex-col">
      <div className= {`flex justify-between py-4 border-t-1 text-${fontSize} `}>
        <div
          className={`${isTabOpen ? "font-bold" : ""} text-wrap xy-center text-${
            color ? color : "inherit"
          }`}
        >
          {title ? title : "Add a title"}
        </div>
        <DropdownButton bgColor={color} onBtnClick={dropDownBtnHandler} />
      </div>
      <div className={`text-xs pb-4 ${isTabOpen ? "block" : "hidden"} `}>
        {content}
      </div>
    </div>
  );
};

export default MoreInfoTab;
