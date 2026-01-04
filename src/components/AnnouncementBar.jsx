import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#151515] py-1.5 text-[#fff] text-sm text-centerw-full h-[30px] overflow-hidden whitespace-nowrap">
      <div className="scroll-animation inline-block">
        <span className="inline-block px-4">SUMMER SCORCH COLLECTION OUT NOW!!!</span>
        <span className="inline-block px-4">THANK YOU FOR YOUR FEEDBACK!!!</span>
        <span className="inline-block px-4">FREE SHIPPING ON ORDERS OVER $50!!!</span>
      </div>
      <div className="scroll-animation inline-block">
        <span className="inline-block px-4">SUMMER SCORCH COLLECTION OUT NOW!!!</span>
        <span className="inline-block px-4">THANK YOU FOR YOUR FEEDBACK!!!</span>
        <span className="inline-block px-4">FREE SHIPPING ON ORDERS OVER $50!!!</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;