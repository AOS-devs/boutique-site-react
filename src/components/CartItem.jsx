import React from 'react'
import { Link } from 'react-router-dom'
import QtyCounter from './QtyCounter'
import { CgTrash } from 'react-icons/cg'
import { images } from '../contexts/Products'
import { useCart } from "../contexts/CartContext";

const CartItem = () => {
   const { cart, addToCart, removeFromCart, clearCart, decrementCartItem } =
    useCart();
  return (
    <div className="w-full h-42.5 flex justify-between items-center border-y border-gray-300">
            <div className=" h-full py-5 pr-3.5 flex items-center">
              <figure className="w-19 h-full mr-4">
                <img
                  src={images[3]}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </figure>
              <div className="w-full h-full flex-1 flex flex-col">
                <Link className="w-full text-base font-bold text-wrap">
                  HF X 101 AVENUE HOODIE TOP
                </Link>
                <div className="my-1.5 flex flex-col">
                  <span>COLOR: BLACK</span>
                  <span>SIZE: S</span>
                </div>
                <div className="flex items-center">
                  <QtyCounter height="10" width="20" />
                  <CgTrash
                    onClick={removeFromCart}
                    className="w-4.5 h-4.5 text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="w-3/10 h-full flex items-center justify-end text-end py-5">
              N480,000.00
            </div>
          </div>
  )
}

export default CartItem