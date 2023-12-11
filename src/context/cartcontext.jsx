import React, { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const CART_STORAGE_KEY = "shopnow_cart";

const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId, quantity, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { productId, quantity, singleProduct },
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, newQuantity } });
  };

  const deleteItemFromCart = (productId) => {
    dispatch({
      type: "DELETE_ITEM_FROM_CART",
      payload: { productId },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  // Function to calculate the total price
  const calculateTotalPrice = () => {
    const TotalPrice = cart.reduce(
      (total, item) => total + item.singleProduct.price * item.quantity,
      0
    );
    return Math.round(TotalPrice * 100) / 100;
  };

  // Calculate the total payable amount by adding the total price and shipping fee
  const calculateTotalPayableAmount = () => {
    const totalPayableAmount = calculateTotalPrice() + shippingFee;
    return Math.round(totalPayableAmount * 100) / 100; // Round to two decimal places
  };

  const shippingFee = 50;
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        deleteItemFromCart,
        clearCart,
        totalPrice: calculateTotalPrice(),
        totalPayableAmount: calculateTotalPayableAmount(),
        shippingFee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCartContext };
