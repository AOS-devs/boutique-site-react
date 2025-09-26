import React from "react";
import CartItem from "./CartItem";
import MoreInfoTab from "./MoreInfoTab";
import { useCart } from "../contexts/CartContext";
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, totalQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const priceTotal = +totalPrice;

  const addText = <textarea className="border w-full h-30 px-4 py-3" />;

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    if (cart.length !== 0) {
       navigate("/checkout");
       window.scrollTo(0,0)
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 lg:h-[106vh] lg:shadow-xs mr-0  flex flex-col">
      <h4 className="w-full h-7 text-xl font-bold mb-7.5">Your Cart</h4>
      <div className="w-full md:h-[100vh] lg:h-[100vh] text-xs flex flex-col md:justify-between lg:justify-between">
        {cart.length !== 0 && (
          <div className="w-full py-4.5 flex shadow-sm">
            <div className="w-full h-full text-start flex-1 ">PRODUCT</div>
            <div className="w-2/10 h-full text-end ">TOTAL</div>
          </div>
        )}
        <div className="h-5/6 md:overflow-y-scroll md:[scrollbar-width:none] lg:overflow-y-scroll lg:[scrollbar-width:none] flex flex-col ">
          {cart.length === 0 ? (
            <div className="h-[20vh] text-2xl xy-center border">
              Cart empty <BsCartX className="w-15 h-15 text-red-400" />
            </div>
          ) : (
            <div className="flex flex-col-reverse">
              <div className="w-1/2 p-4 text-xl flex flex-col justify-between">
                <span>No. of Items: {totalQuantity}</span>
                <span>Total Price: ${priceTotal.toFixed(2)}</span>
                <button
                  onClick={handleClearCart}
                  className="cursor-pointer rounded hover:bg-[#151515] hover:text-white border"
                >
                  Clear Cart
                </button>
              </div>
              <div className=" border">
                {cart.map((cartItem, index) => {
                  return (
                    <CartItem
                      key={index}
                      title={cartItem.title}
                      image={cartItem.image}
                      price={cartItem.price}
                      id = {cartItem.id}
                      item = {cartItem}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <MoreInfoTab title="Add notes" content={addText} color="black" />
          <button
            onClick={handleCheckout}
            className="w-full h-12 py-2 px-7.5 bgColor text-white cursor-pointer border"
          >
            CHECKOUT . ${priceTotal.toFixed(2)}
          </button>
          <p className="w-full my-5 text-center">
            Taxes and shipping calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
