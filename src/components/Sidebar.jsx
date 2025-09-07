import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className={`text-white text-sm h-[88vh] w-[100vw] bg-[#121212] px-4 flex-col gap-6 justify-center absolute top-[12%] ${
            isOpen ? `translate-x-0` : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-20 `}
        >
          <Link to="/">
            <div className="border-b py-4">HOME</div>
          </Link>
          <Link to="">
            <div className="border-b py-4 flex justify-between ">
              <div>SHOP</div>
              <FaArrowRightLong className="w-4 h-4" />
            </div>
          </Link>
          <Link to="">
            <div className="border-b py-4">ABOUT</div>
          </Link>
          <Link to="">
            <div className="border-b py-4">FAQ</div>
          </Link>
          <Link to="">
            <div className="border-b py-4">CONTACT</div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Sidebar;
