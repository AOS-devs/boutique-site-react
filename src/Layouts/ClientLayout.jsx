import React, { useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const ClientLayout = ({ children }) => {
  const [isHamburgerToggled, setIsHamburgerToggled] = useState(null)
  const handleHamburgerStateChange = (isOpen) => {
    setIsHamburgerToggled(isOpen)
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar onHamburgerStateChange={handleHamburgerStateChange} />
      <Sidebar isOpen={isHamburgerToggled} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
