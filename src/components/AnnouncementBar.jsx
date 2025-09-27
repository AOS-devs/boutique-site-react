import React from "react";
import "./AnnouncementBar.css"; // Add this for external CSS

const AnnouncementBar = () => {
  return (
    <div className="bg-[#151515] text-[#fff] text-sm text-center px-[14px] w-full h-[30px] overflow-hidden">
      <div className="scroll-animation whitespace-nowrap">
        <span className="mx-8">SUMMER SCORCH COLLECTION OUT NOW!!!</span>
        <span className="mx-8">THANK YOU FOR YOUR FEEDBACK!!!</span>
        <span className="mx-8">FREE SHIPPING ON ORDERS OVER $50!!!</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;