import { createContext, useContext, useReducer,useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cart: (() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  })(),
};
function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_TO_CART":
      const exists = state.cart.find(
        item => item.id === action.payload.id
      );  

      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      } 

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          item => item.id !== action.payload
        ),
      };

      case "INCREASE_QTY":
        return {
            ...state,
            cart: state.cart.map(item =>
            item.id === action.payload
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
        };
        case "DECREASE_QTY":
        return {
            ...state,
            cart: state.cart.map(item =>
            item.id === action.payload && item.qty > 1
                ? { ...item, qty: item.qty - 1 }
                : item
            ),
        };

    default:
      return state;
  }
}

export function CartProvider({ children }) {

    const [state, dispatch] = useReducer(cartReducer, initialState);
        useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ cart: state.cart, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
