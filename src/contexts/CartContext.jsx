import { createContext, useContext, useReducer, useState } from "react";

const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

const persistedCart = localStorage.getItem("cart");

const initialState = persistedCart
  ? JSON.parse(persistedCart)
  : {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };

const CartReducer = (state, action) => {
  let newState = state;

  if (action.type === CART_ACTIONS.ADD_ITEM) {
    const exists = state.items.find((item) => item.id === action.item.id);
    const qtyToAdd = action.quantity ?? 1;
    if (exists) {
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        ),
        totalQuantity: state.totalQuantity + qtyToAdd,
        totalPrice: state.totalPrice + action.item.price * qtyToAdd,
      };
    } else {
      newState = {
        ...state,
        items: [
          ...state.items,
          { ...action.item, quantity: action.quantity ?? 1 },
        ],
        totalQuantity: state.totalQuantity + qtyToAdd,
        totalPrice: state.totalPrice + action.item.price * qtyToAdd,
      };
    }
  }

  if (action.type === CART_ACTIONS.REMOVE_ITEM) {
    const itemToRemove = state.items.find((item) => item.id === action.id);
    newState = {
      ...state,
      items: state.items.filter((item) => item.id !== action.id),
      totalQuantity: state.totalQuantity - itemToRemove.quantity,
      totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
    };
  }

  if (action.type === CART_ACTIONS.INCREASE_QUANTITY) {
    newState = {
      ...state,
      items: state.items.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
      totalQuantity: state.totalQuantity + 1,
      totalPrice:
        state.totalPrice +
        state.items.find((item) => item.id === action.id).price,
    };
  }

  if (action.type === CART_ACTIONS.DECREASE_QUANTITY) {
    const itemToDecrease = state.items.find((item) => item.id === action.id);
    if (!itemToDecrease) return state;

    if (itemToDecrease.quantity === 1) {
      newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - itemToDecrease.price,
      };
    } else {
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - itemToDecrease.price,
      };
    }
  }

  if (action.type === CART_ACTIONS.CLEAR_CART) {
    newState = {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };
  }

  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [isBump, setIsBump] = useState(false);
  
  let isItemInCart = false;

  const addItem = (item, quantity) => {
    dispatch({ type: "ADD_ITEM", item, quantity });
    setIsBump(true);
    setTimeout(() => {
      setIsBump(false);
    }, 300);
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  if (state.totalQuantity !== 0) {
    isItemInCart = true;
  }
  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
        addToCart: addItem,
        removeFromCart: removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isItemInCart,
        isBump,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
