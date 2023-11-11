import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [addItems, setAddItems] = useState([]);

  const addItemToCartHandler = (item) => {
    let cartItems = [...addItems];
    let hasItem = false;
    cartItems.forEach((product) => {
      if (product.id === item.id) {
        hasItem = true;
        product.quantity = Number(product.quantity) + Number(item.quantity);
      }
    });
    if (hasItem) {
      setAddItems(cartItems);
    } else {
      setAddItems((prevItems) => {
        return [...prevItems, item];
      });
    }
  };

  const removeItemFromCartHandler = (item) => {
    const cartItems = [...addItems];
    cartItems.forEach((product, index) => {
      if (product.id === item.id && item.quantity <= 1) {
        cartItems.splice(index, 1);
        setAddItems(cartItems);
      }
      if (product.id === item.id && item.quantity > 1) {
        product.quantity = Number(product.quantity) - 1;
        setAddItems(cartItems);
      }
    });
  };

  const cartContext = {
    items: addItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;