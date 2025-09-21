import React from "react";
import CartItem from "./CartItem";
import MoreInfoTab from "./MoreInfoTab";

const Cart = () => {
  const addText = <textarea className="border w-full h-30 px-4 py-3" />;

  return (
    <div className="w-full md:w-1/2 lg:w-1/2 lg:h-[106vh] lg:shadow-xs mr-0  flex flex-col">
      <h4 className="w-full h-7 text-xl font-bold mb-7.5">Your Cart</h4>
      <div className="w-full text-xs flex flex-col">
        <div className="w-full py-4.5 flex shadow-sm">
          <div className="w-full h-full text-start flex-1 ">PRODUCT</div>
          <div className="w-2/10 h-full text-end ">TOTAL</div>
        </div>
        <CartItem />
        <CartItem />
        <MoreInfoTab title="Add notes" content={addText} color="black" />
        <button className="w-full h-12 py-2 px-7.5 bgColor text-white border">
          CHECKOUT . N480,000.00
        </button>
        <p className="w-full my-5 text-center">
          Taxes and shipping calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default Cart;
