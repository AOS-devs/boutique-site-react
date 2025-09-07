import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";

const Footer = () => {
  return (
    <footer className="w-full h-[130vh] bg-[#151515] text-white p-4 relative ">
      <div className="mb-10">
        <figure className="flex mb-4">
          <img src="" alt="Logo" />
        </figure>
        <p className="text-[12px] mb-4 ">
          At High Fashion By Jol, we believe that fashion is an expression of
          individuality and artistry.
        </p>
        <FaInstagram className="w-4 h-4 text-[14px] mb-4" />
      </div>

      <div className="mb-4">
        <div className="flex justify-between py-4 border-t-1 ">
          <div className="font-bold">QUICK LINK</div>
          <DropdownButton />
        </div>
        <div className="flex justify-between py-4 border-t-1 ">
          <div className="font-bold">SHOP</div>
          <DropdownButton />
        </div>
      </div>

      <div className="text-[12px] font-bold py-4 mb-4">
        <p className="mb-4">
          Operating hours: Monday-Saturday (10am - 8pm) Sunday (12pm - 8pm)
        </p>
        <p className="mb-4 font-bold">
          SHOP 38/39, AARON'S LEKKI MALL, ADMIRALTY, LAGOS, NIGERIA
        </p>
        <Link to="/">
          <span className="w-full border-b ">GET DIRECTIONS</span>
        </Link>
      </div>

      <div className="text-[12px]">
        <p className="font-bold mb-4">GET 10% OFF YOUR NEXT ORDER</p>
        <div className="mb-4">
          *BY SIGNING UP, YOU AGREE TO RECEIVE EMAILS ABOUT HIGHFASHION AND OUR{" "}
          <Link to="/">
            <span className="border-b">OTHER TERMS</span>
          </Link>
          .
        </div>
        <div className="border rounded-[4px] flex items-center w-full h-9">
          <input
            type="email"
            placeholder="Email"
            className="w-7/8 h-full p-4 text-white text-[12px]"
          />
          <figure className="w-[calc((1-7/8)*100%)] h-full text-center p-2">
            <FaArrowRightLong className="w-4 h-4 text-[#ffffffa9]" />
          </figure>
        </div>
      </div>

      <p className="text-xs text-[#ffffffa9] absolute top-[89%] ">
        © {new Date().getFullYear()} High Fashion by J.O.L., All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
