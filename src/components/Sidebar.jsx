import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollToTopLink from "./ScrollToTopLink";
import Modal from "../UI/Modal";
import { useHamburger } from "../contexts/HamburgerContext";

const Sidebar = () => {
  const { isOpen, onCloseSidebar:onCloseSidebar } = useHamburger();

  return (
    <Modal isOpen={isOpen} onClose={onCloseSidebar}>
      {isOpen && (
        <div
          className={`text-white text-sm h-[88vh] w-full bg-[#121212] px-4 flex-col gap-6 justify-center absolute top-[17.6%] ${
            isOpen ? `translate-x-0` : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 `}
        >
          <ScrollToTopLink to="/" closeOnNavigate={onCloseSidebar} >
            <div className="border-b py-4">HOME</div>
          </ScrollToTopLink>
          <ScrollToTopLink to="/allproducts" closeOnNavigate={onCloseSidebar}>
            <div className="border-b py-4 flex justify-between ">
              <div>SHOP</div>
              <FaArrowRightLong className="w-4 h-4" />
            </div>
          </ScrollToTopLink>
          <ScrollToTopLink to="/about" closeOnNavigate={onCloseSidebar}>
            <div className="border-b py-4">ABOUT</div>
          </ScrollToTopLink>
          <ScrollToTopLink to="" closeOnNavigate={onCloseSidebar}>
            <div className="border-b py-4">FAQ</div>
          </ScrollToTopLink>
          <ScrollToTopLink to="/contact" closeOnNavigate={onCloseSidebar}>
            <div className="border-b py-4">CONTACT</div>
          </ScrollToTopLink>
        </div>
      )}
    </Modal>
  );
};

export default Sidebar;
