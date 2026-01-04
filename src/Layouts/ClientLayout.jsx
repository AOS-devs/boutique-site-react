import React, { useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import CurrencySelector from "../components/CurrencySelector";

const ClientLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
      <div className="fixed top-[92.5%] left- w-full px-2.5 flex justify-between items-center">
        <CurrencySelector />
        <div className="text-white p-1.5 flex justify-center items-center gap-2 bg-[#282828] rounded-2xl ">
          <BiSolidMessageSquareDots className="w-6 h-6" />
          <div>Chat with us</div>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
