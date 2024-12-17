import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState(null);

  const addToCart = (data) => {
    const itemsCartData = [...cartItems];
    const itemDataIndex = itemsCartData.findIndex((item) => item.id === data.id);

    if (itemDataIndex >= 0) {
      const cartData = itemsCartData.map((item, index) => index === itemDataIndex ? { ...item, quantity: item.quantity + data.quantity } : item)
      setCartItems(cartData);
    } else {
      setCartItems((prevState) => [...prevState, data]);
    }
  };

  const removeFromCart = (id) => {
    const cartItemsData = [...cartItems];
    const filterData = cartItemsData.filter((item) => item.id !== id);
    setCartItems(filterData);
  };

  const increaseQuantity = (id) => {
    const cartItemsData = [...cartItems];
    const addQuantityData = cartItemsData.find((item) => item.id === id);
    addQuantityData.quantity += 1;
    setCartItems(cartItemsData);
  };

  const addToCheckout = (data) => {
    setCheckoutItems(data);
  }
  const removeCheckout = () => {
    setCheckoutItems(null);
  }
  const removeCartItems = () => {
    setCartItems([]);
  }

  const decreaseQuantity = (id) => {
    const cartItemsData = [...cartItems];
    const addQuantityData = cartItemsData.find((item) => item.id === id);
    addQuantityData.quantity -= 1;
    setCartItems(cartItemsData);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const calculateCheckoutTotal = () => {
    return checkoutItems.price * checkoutItems.quantity;
    // return checkoutItems.reduce(
    //   (total, item) => total + item.price * item.quantity,
    //   0
    // );
  };
  return (
    <ShopContext.Provider
      value={{
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        calculateTotal,
        cartItems,
        addToCheckout,
        checkoutItems,
        calculateCheckoutTotal,
        removeCheckout,
        removeCartItems
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
