import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToTopLink from "./ScrollToTopLink";

const Sidebar = (props) => {
  const { isOpen, closeOnNavigate } = props;

  return (
    <>
      {isOpen && (
        <div
          className={`text-white text-sm h-[88vh] w-[100vw] bg-[#121212] px-4 flex-col gap-6 justify-center absolute top-[12%] ${
            isOpen ? `translate-x-0` : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-20 `}
        >
          <ScrollToTopLink to="/" closeOnNavigate={closeOnNavigate} >
            <div className="border-b py-4">HOME</div>
          </ScrollToTopLink>
          <ScrollToTopLink to="/allproducts" closeOnNavigate={closeOnNavigate}>
            <div className="border-b py-4 flex justify-between ">
              <div>SHOP</div>
              <FaArrowRightLong className="w-4 h-4" />
            </div>
          </ScrollToTopLink>
          <ScrollToTopLink to="/about" closeOnNavigate={closeOnNavigate}>
            <div className="border-b py-4">ABOUT</div>
          </ScrollToTopLink>
          <ScrollToTopLink to="" closeOnNavigate={closeOnNavigate}>
            <div className="border-b py-4">FAQ</div>
          </ScrollToTopLink>
          <ScrollToTopLink to="/contact" closeOnNavigate={closeOnNavigate}>
            <div className="border-b py-4">CONTACT</div>
          </ScrollToTopLink>
        </div>
      )}
    </>
  );
};

export default Sidebar;
