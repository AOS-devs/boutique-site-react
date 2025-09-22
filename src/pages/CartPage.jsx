import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import ProductCarousel from "../components/ProductCarousel";
import Cart from "../components/Cart";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart, decrementCartItem } =
    useCart();
  const navigate = useNavigate();

  const shippingFee = 5.0; // flat shipping for MVP
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingFee;
  //console.log(cart);

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
    <div className="w-full my-5 px-4 flex flex-col md:flex-row-reverse lg:flex-row-reverse lg:gap-8 txtColor">
      <Cart />
      <div className="w-full md:w-5/8 lg:w-5/8 md:h-[85vh] lg:h-[106vh] md:overflow-y-scroll md:[scrollbar-width:none] lg:overflow-y-scroll lg:[scrollbar-width:none] text-lg py-12.5 flex flex-col ">
        <div className="w-full mb-5 text-center ">
          <h2 className="w-full h-7.5 text-[26px] font-semibold mb-2.5 py-1 ">
            YOU MAY ALSO LIKE
          </h2>
          <p className="w-full text-xs py-1">
            Combine your style with these products
          </p>
        </div>
        <ProductCarousel />
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
