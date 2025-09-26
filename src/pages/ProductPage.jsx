import { Link, useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { products } from "../contexts/Products";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { PiCopySimpleFill, PiRulerLight, PiTShirtBold } from "react-icons/pi";
import { TbBox, TbIroning } from "react-icons/tb";
import { BsPinterest } from "react-icons/bs";
import ProductCarousel from "../components/ProductCarousel";
import Faq from "../components/Faq";
import { useEffect, useState } from "react";
import QtyCounter from "../components/QtyCounter";
import ScrollToTopLink from "../components/ScrollToTopLink";

const ProductPage = () => {
  const { id } = useParams();
  const [qtyCount, setQtyCount] = useState(1);
  const { cart, addToCart } = useCart();

  const handleInputChange = (e) => {
    setQtyCount(parseInt(e.target.value));
  };

  const handleIncreaseQty = () => {
    setQtyCount((prev) => prev + 1);
  };

  const handleDecreaseQty = () => {
    setQtyCount((prev) => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    addToCart(product, qtyCount);
    setQtyCount(1);
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  /* The below extracts clicked product's detail by ID */
  const extractProductbyID = products.filter((product) => {
    if (product.id === id) {
      return product;
    }
  });
  /* The above extracts clicked product's detail by ID */

  const product = extractProductbyID[0];

  if (!product) {
    return <div>Product not found </div>;
  }

  return (
    <main className="h-auto text-xs px-4 ">
      <nav className="w-full min-h-12 text-xs p-[15px] flex items-center ">
        <ScrollToTopLink to="/">Home</ScrollToTopLink> <i className="mx-2">|</i>{" "}
        <ScrollToTopLink>{product.title}</ScrollToTopLink>
      </nav>
      <div>
        <div className="shadow-sm h-[90vh] flex flex-col justify-center items-center ">
          <div className="flex w-full h-full ">
            <figure className="w-full h-full">
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="w-full min-h-[34px] flex-1 flex justify-center items-center">
            <button className="w-[34px] h-[34px] text-xs flex justify-center items-center cursor-pointer">
              <RiArrowDropLeftLine className="w-[70%] h-[70%]" />
            </button>
            <div className="w-[34px] h-[34px] text-xs flex justify-center items-center">
              1 / 9
            </div>
            <button className="w-[34px] h-[34px] text-xs flex justify-center items-center cursor-pointer">
              <RiArrowDropRightLine className="w-[70%] h-[70%]" />
            </button>
          </div>
        </div>
        <div className="w-full h-[549px] ">
          <p className="w-full mb-[10px] ">HIGH FASHION BY J.O.L.</p>
          <header className="w-full h-15 mb-5 ">
            <h1 className="w-full h-[34px] text-[18px] mb-[3px] ">
              {product.title}
            </h1>
            <span className="w-full h-[24px] text-[15px] mr-11px  ">
              ${product.price} USD
            </span>
          </header>
          <div className="mb-[10px]">
            <fieldset className="w-full h-19 mb-5 text-lg flex flex-col">
              <div>COLOR: Black</div>
              <div className="flex">
                <label className="w-12 h-12 text-xs mb-[1px] xy-center shadow-xs shadow-stone-400 ">
                  <div className="w-5 h-5 rounded-full bg-black border"></div>
                </label>
                <label className="w-12 h-12 text-xs mb-[1px] xy-center shadow-xs shadow-stone-400 ">
                  <div className="w-5 h-5 rounded-full bg-gray-200 "></div>
                </label>
              </div>
            </fieldset>
            <div>
              <div className="w-full h-5 text-sm mb-2.5 flex justify-between">
                <div>SIZE: S</div>
                <div className="flex justify-center items-center">
                  <PiRulerLight className="w-3 h-3 mr-2 cursor-pointer" />
                  <button className="cursor-pointer">sizing guide</button>
                </div>
              </div>
              <div className="mb-5 flex">
                <label className="w-12 h-12 text-sm mb-[1px] py-[5px] px-[15px] xy-center shadow-xs shadow-stone-400 ">
                  S
                </label>
                <label className="w-12 h-12 text-sm mb-[1px] py-[5px] px-[15px] xy-center shadow-xs shadow-stone-400 ">
                  M
                </label>
                <label className="w-12 h-12 text-sm mb-[1px] py-[5px] px-[15px] xy-center shadow-xs shadow-stone-400 ">
                  L
                </label>
                <label className="w-12 h-12 text-sm mb-[1px] py-[5px] px-[15px] xy-center shadow-xs shadow-stone-400 ">
                  XL
                </label>
                <label className="w-12 h-12 text-sm mb-[1px] py-[5px] px-[15px] xy-center shadow-xs shadow-stone-400 ">
                  2XL
                </label>
                <label className="w-12 h-12 text-sm mb-[1px] py-[5px] px-[15px] xy-center shadow-xs shadow-stone-400 ">
                  3XL
                </label>
              </div>
              <div className="w-full h-[106px] text-lg mb-[25px] flex flex-col flex-1 ">
                <div className="w-full mb-2.5 flex ">
                  <div
                    className={`h-12 w-[25%]  mr-[10px] flex items-center border`}
                  >
                    <button
                      onClick={handleDecreaseQty}
                      className="w-[33%] h-full text-center xy-center cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={qtyCount}
                      min="1"
                      onChange={handleInputChange}
                      readOnly
                      className="w-[34%] h-full text-center xy-center font-bold"
                    />
                    <button
                      onClick={handleIncreaseQty}
                      className="w-[33%] h-full text-center xy-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="w-[75%] h-12 xy-center text-center text-xs py-[7px] px-[30px] cursor-pointer border"
                  >
                    ADD TO CART
                  </button>
                </div>
                <button className="w-full h-12 py-[7px] px-[30px] text-sm font-bold text-white bg-black text-center cursor-pointer">
                  BUY IT NOW
                </button>
              </div>
              <div className="w-full h-auto flex justify-start flex-wrap mb-6.5">
                <button className="h-5 text-xs mr-3 flex flex-nowrap items-center ">
                  <PiTShirtBold className="w-6 h-6 mr-[5px] " />
                  <span className="text-[15px] border-b whitespace-nowrap ">
                    Materials
                  </span>
                </button>
                <button className="h-5 text-xs mr-3 flex flex-nowrap items-center ">
                  <TbBox className="w-6 h-6 mr-[5px] " />
                  <span className="text-[15px] border-b whitespace-nowrap ">
                    Shipping & Returns
                  </span>
                </button>
                <button className="h-5 text-xs mr-3 flex flex-nowrap items-center">
                  <TbIroning className="w-6 h-6 mr-[5px] " />
                  <span className="text-[15px] border-b whitespace-nowrap ">
                    Care Guide
                  </span>
                </button>
              </div>
              <div className="w-full h-6 mb-6.5 flex justify-start items-center ">
                <Link className="w-6 h-6 mr-3.5">
                  <FaFacebook className="w-full h-full" />
                </Link>
                <Link className="w-6 h-6 mr-3.5">
                  <FaXTwitter className="w-full h-full" />
                </Link>
                <Link className="w-6 h-6 mr-3.5">
                  <BsPinterest className="w-full h-full" />
                </Link>
                <Link className="w-6 h-6 mr-3.5">
                  <FaWhatsapp className="w-full h-full" />
                </Link>
                <Link className="w-6 h-6 mr-3.5">
                  <PiCopySimpleFill className="w-full h-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-9 "></div>
        <div className="w-full text-lg py-12.5 flex flex-col">
          <div className="w-full mb-5 ">
            <h2 className="w-full h-7.5 text-[26px] font-semibold mb-2.5 py-1 ">
              YOU MAY ALSO LIKE
            </h2>
            <p className="w-full text-xs py-1">
              Combine your style with these products
            </p>
          </div>
          <div className="w-full h-auto mb-30">
            <ProductCarousel />
          </div>
          <Faq />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

/* const product = {
  id,
  title: `Product ${id}`,
  price: 39.99,
  image: "https://via.placeholder.com/200",
  description: "This is a sample product description.",
}; */
