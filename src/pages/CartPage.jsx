import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import MoreInfoTab from "../components/MoreInfoTab";
import { images } from "../contexts/Products";
import QtyCounter from "../components/QtyCounter";
import { CgTrash } from "react-icons/cg";
import ProductCarousel from "../components/ProductCarousel";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart, decrementCartItem } =
    useCart();
  const navigate = useNavigate();

  const addText = <textarea className="border w-full h-30 px-4 py-3" />

  const shippingFee = 5.0; // flat shipping for MVP
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingFee;
  console.log(cart);

  /* if (cart.lengdiv === 0) {
    return (
      <div className="p-4 text-center flex flex-col xy-center ">
        <h2 className="text-xl mb-4">Your cart is empty</h2>
        <Link to="/" className="max-w-[40%] px-4 py-2 mb-8 border rounded hover:bg-black hover:text-white ">
          Shop Products
        </Link>
        <ProductCarousel />
      </div>
    );
  } */

  return (
    <div className="w-full my-5 px-4 flex flex-col txtColor">
      <h4 className="w-full h-7 text-xl font-bold mb-7.5">Your Cart</h4>
      <div className="w-full text-xs flex flex-col">
        <div className="w-full py-4.5 flex shadow-sm">
          <div className="w-full h-full text-start flex-1 ">PRODUCT</div>
          <div className="w-2/10 h-full text-end ">TOTAL</div>
        </div>
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
                <CgTrash onClick={removeFromCart} className="w-4.5 h-4.5 text-red-500"/>
              </div>
            </div>
          </div>
          <div className="w-3/10 h-full flex items-center justify-end text-end py-5">N480,000.00</div>
        </div>
        <div>
          <MoreInfoTab title="Add notes" content={addText} color="black" />
        </div>
        <button className="w-full h-12 py-2 px-7.5 bgColor text-white border">CHECKOUT . N480,000.00</button>
        <p className="w-full my-5 text-center">Taxes and shipping calculated at checkout</p>
      </div>
      <div className="w-full text-lg py-12.5 flex flex-col">
          <div className="w-full mb-5 text-center ">
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
        </div>
    </div>
  );
};

export default CartPage;

{
  /* {cart.map((item) => (
  <div key={item.id} className="flex justify-between items-center border p-4 rounded">
    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
    <div className="flex-1 ml-4">
      <h2 className="font-bold">{item.title}</h2>
      <p>${item.price}</p>
    </div>
    <div className="flex items-center gap-2">
      <button
        className="px-2 py-1 bg-gray-200"
        onClick={() => decrementCartItem(item.id)}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button className="px-2 py-1 bg-gray-200" onClick={() => addToCart(item)}>
        +
      </button>
    </div>
    <div>
      <p>${(item.price * item.quantity)}</p>
    </div>
    <button
      onClick={() => removeFromCart(item.id)}
      className="text-red-500 font-bold"
    >
      Remove
    </button>
  </div>
))} */
}
