import React, { useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const ClientLayout = ({ children }) => {
  const [isHamburgerToggled, setIsHamburgerToggled] = useState(null);
  const handleHamburgerStateChange = (isOpen) => {
    setIsHamburgerToggled(isOpen);
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar onHamburgerStateChange={handleHamburgerStateChange} />
      <Sidebar isOpen={isHamburgerToggled} />
      <main>{children}</main>
      <Footer />
      <div className="fixed top-[92.5%] left- w-full px-2.5 flex justify-between items-center">
        <button className="w-20 h-8 flex items-center border bg-white">
          <div className="text-center flex-1 font-bold">USD</div>
          <RiArrowDropDownLine className="w-8 h-full" />
        </button>
        <div className="text-white p-1.5 flex justify-center items-center gap-2 bg-[#282828] rounded-2xl ">
          <BiSolidMessageSquareDots className="w-6 h-6" />
          <div>Chat with us</div>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
