import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart, decrementCartItem } = useCart();
  const navigate = useNavigate();

  const shippingFee = 5.0; // flat shipping for MVP
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingFee;
  console.log(cart)

  if (cart.length === 0) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl mb-4">Your cart is empty</h2>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            <div className="flex-1 ml-4">
              <h2 className="font-bold">{item.title}</h2>
              <p>${item.price.toFixed(2)}</p>
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
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-bold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 space-y-2 text-right">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping: ${shippingFee.toFixed(2)}</p>
        <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
        <div className="flex justify-between mt-4">
          <Link
            to="/allproducts"
            className="bg-gray-500 px-4 py-2 text-white rounded"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-blue-500 px-4 py-2 text-white rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
