import React from "react";
import { products } from "../contexts/Products";
import ScrollToTopLink from "./ScrollToTopLink";

const ProductCarousel = () => {
  const isCartPage = window.location.pathname === "/cart";
  return (
    <div className={`${isCartPage ? "overflow-x-auto md:h-auto lg:h-auto md:flex-wrap lg:flex-wrap " : "h-80 overflow-x-auto [scrollbar-width:none]" } w-full text-xs flex gap-4`}>
      {products.map((product) => {
        return (
          <ScrollToTopLink key={product.id} to={`/product/${product.id}`} className={`${isCartPage && "md:mx-auto"} `}>
            <div className={`w-50 ${isCartPage ? "": ""} h-full flex flex-col flex-shrink-0 items-center`}>
              <figure className="mb-4 w-full shadow-xs ">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-55 object-cover"
                />
              </figure>
              <h2 className="w-full h-9 text-center mb-2 font-bold">{product.title}</h2>
              <span className="w-full h-4.5 text-center mb-3">${product.price} USD</span>
              <div className="w-full h-4.5 text-center text-[13px] mb-3">Available in 3 colors</div>
            </div>
          </ScrollToTopLink>
        );
      })}
    </div>
  );
};

export default ProductCarousel;
