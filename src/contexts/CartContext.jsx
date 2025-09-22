import { createContext, useContext, useReducer } from "react";

const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartReducer = (state, action) => {
  if (action.type === CART_ACTIONS.ADD_ITEM) {
    const exists = state.items.find((item) => {
      item.id === action.item.id;
    });
    if (exists) {
      return {
        ...state,
        items: state.items.map((item) => {
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.item.price,
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.price,
      };
    }
  }
  if (action.type === CART_ACTIONS.REMOVE_ITEM) {
    const itemToRemove = state.items.find((item) => item.id === action.id);
    return {
      ...state,
      items: state.items.filter((item) => {
        item.id == !action.id;
      }),
      totalQuantity: state.totalQuantity - itemToRemove.quantity,
      totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
    };
  }

  if (action.type === CART_ACTIONS.INCREASE_QUANTITY) {
    return {
      ...state,
      items: state.items.map((item) => {
        item.id === action.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      }),
      totalQuantity: state.totalQuantity + 1,
      totalPrice: state.totalPrice + action.item.price,
    };
  }

  if (action.type === CART_ACTIONS.DECREASE_QUANTITY) {
    const itemToDecrease = state.items.find((item) => {
      item.id === action.item.id;
    });
    if (itemToDecrease.quantity === 1) {
      return {
        ...state,
        items: state.items.filter((item) => item.id == !itemToDecrease.id),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - action.item.price,
      };
    } else {
      return {
        ...state,
        items: state.items.map((item) => {
          item.id === action.item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - action.item.price,
      };
    }
  }

  if (action.type === CART_ACTIONS.CLEAR_CART) {
    return initialState;
  }

  return state;
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

/* import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const incrementCartItem = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCartItem = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementCartItem, decrementCartItem, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
 */
