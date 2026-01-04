import { Link, useLocation } from "react-router-dom";
import { useHamburger } from "../contexts/HamburgerContext";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { toggleHamburger: hamburgerHandler, isOpen } = useHamburger();
  const { isItemInCart, isBump } = useCart();

  const location = useLocation();
  const isHomePage = window.location.pathname === "/";

  return (
    <nav
      className={`border-b border-b-[#888] py-4 flex justify-between items-center ${
        isHomePage
          ? "bg-transparent absolute top-[30px]"
          : "bg-[#151515]  sticky top-0"
      } text-white h-[70px] w-full z-20`}
    >
      <div
        className="flex flex-col justify-center items-center  cursor-pointer h-[48px] w-[48px] gap-[5px]"
        onClick={hamburgerHandler}
      >
        <span
          className={`bg-white w-[20px] h-[1.5px] origin-center transition-transform ${
            isOpen ? "rotate-45 translate-y-[3px]" : ""
          }`}
        ></span>
        <span
          className={`bg-white w-[20px] h-[1.5px] ${isOpen ? "hidden" : ""}`}
        ></span>
        <span
          className={`bg-white w-[20px] h-[1.5px] origin-center transition-transform ${
            isOpen ? "-rotate-45 -translate-y-[3px]" : ""
          }`}
        ></span>
      </div>
      <Link to="/">Logo</Link>
      <div className="flex gap-2 mr-4 cursor-pointer">
        <div>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 13.5L17.7495 18.5M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
              stroke="var(--color-header-icons, --color-accent)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <Link to="/cart" className={`cursor-pointer ${isBump ? "bump" : ""}`}>
          {isItemInCart && (
            <div className="w-2.5 h-2.5 rounded-full border  bg-red-500 absolute top-[16px] right-[8px]" />
          )}
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.58011L3.88304 1.09945V1H15.2164L18 4.58011M1 4.58011V17.2099C1 18.2044 1.89474 19 2.88889 19H16.1111C17.1053 19 18 18.2044 18 17.2099V4.58011M1 4.58011H18M13.3275 8.16022C13.3275 10.1492 11.6374 11.7403 9.54971 11.7403C7.46199 11.7403 5.67251 10.1492 5.67251 8.16022"
              stroke="var(--color-header-icons, --color-accent)"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
