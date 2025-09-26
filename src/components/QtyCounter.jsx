import React, { useEffect, useMemo, useState } from "react";
import { useCart } from "../contexts/CartContext";

const QtyCounter = React.memo((props) => {
  const { id } = props;
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  //The below stores the item's quantity from cart
   const qtyFromCart = useMemo(() => {
    const found = cart.find((item) => item.id === id);
    return found ? found.quantity : 1;
  }, [cart, id]);
  //The above stores the item's quantity from cart

  const [qtyCount, setQtyCount] = useState(qtyFromCart);

  //keep local qtyCount in sync with cart when cart changes
  useEffect(() => {
    setQtyCount(qtyFromCart)
  },[qtyFromCart])

  const handleIncreaseQty = () => {
    setQtyCount((prev) => prev + 1);
    increaseQuantity(id);
  };

  const handleDecreaseQty = () => {
    setQtyCount((prev) => Math.max(prev - 1, 1));
    decreaseQuantity(id);
  };
  return (
    <div
      className={`h-12 w-[70%] text-base  mr-[10px] flex items-center border`}
    >
      <button
        onClick={handleDecreaseQty}
        className="w-[33%] h-full text-center xy-center cursor-pointer"
      >
        -
      </button>
      <div className="w-[34%] h-full text-center xy-center font-bold">
        {qtyCount}
      </div>
      <button
        onClick={handleIncreaseQty}
        className="w-[33%] h-full text-center xy-center cursor-pointer"
      >
        +
      </button>
    </div>
  );
});

export default QtyCounter;
