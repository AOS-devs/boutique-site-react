import React from "react";
import { Link } from "react-router-dom";
import QtyCounter from "./QtyCounter";
import { CgTrash } from "react-icons/cg";
import { useCart } from "../contexts/CartContext";

const CartItem = React.memo((props) => {
  const { title, image, price, id, item } = props;
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div className="w-full h-42.5 flex justify-between items-center border-y border-gray-300">
      <div className=" h-full py-5 pr-3.5 flex items-center">
        <figure className="w-19 h-full mr-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover "
          />
        </figure>
        <div className="w-full h-full flex-1 flex flex-col gap-1">
          <Link
            to="/product/:id"
            className="w-full text-base md:text-xs lg:text-base font-bold text-wrap"
          >
            {title}
          </Link>
          <div className="my-1.5 flex flex-col">
            <span>COLOR: BLACK</span>
            <span>SIZE: S</span>
          </div>
          <div className="h-12 flex items-center border">
            <QtyCounter id={id} />
            <CgTrash
              onClick={() => removeFromCart(id)}
              className="w-7 h-7 p-1 text-red-500 cursor-pointer border"
            />
          </div>
        </div>
      </div>
      <div className="w-3/10 h-full flex items-center justify-end text-end py-5">
        ${price}
      </div>
    </div>
  );
});

export default CartItem;
