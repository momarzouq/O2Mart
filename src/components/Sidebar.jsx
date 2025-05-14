import React, { useState } from "react";
import useCartStore from "../store/sidebarStore";
import Close from "../assets/X.svg";
import Tyre from "../assets/Tyers.svg";
import { Link } from "react-router-dom";
import QuantityItem from "./QuantityItem";

const SidebarCart = () => {
  const { isOpen, closeModal } = useCartStore();

  // Sample dynamic cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bridgestone 222/222 123 123",
      price: 555.55,
      image: Tyre,
      quantity: 1,
    },
    {
      id: 2,
      name: "Bridgestone 333/333 456 456",
      price: 666.66,
      image: Tyre,
      quantity: 2,
    },
  ]);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col md:justify-between ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={closeModal}
        className="absolute right-4 top-4 hover:text-Brand"
      >
        <img src={Close} alt="Close" />
      </button>

      {/* Cart Items */}
      <div className="p-4 border-b">
        <h2 className="text-center text-2xl mb-6">
          {cartItems.length} Items In Cart
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-start items-center gap-4 mb-4"
          >
            <Link to="/cart">
              <img
                src={item.image}
                className="h-16 w-16 cursor-pointer"
                alt={item.name}
              />
            </Link>

            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-sm text-gray-400">
                Price: {item.price.toFixed(2)} AED
              </p>

              {/* Counter */}
              <QuantityItem
                item={item}
                increment={increment}
                decrement={decrement}
                removeItem={removeItem}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="my-4 mx-4">
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p>AED {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total incl.VAT</p>
            <p>AED {subtotal.toFixed(2)}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <Link to="/cart" className="w-full text-xs font-semibold text-Brand text-center rounded-md border py-2 border-Brand">
            View Cart
          </Link>
          <Link to="/checkout" className="w-full text-xs font-semibold bg-Brand text-white text-center rounded-md border py-2 border-Brand">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarCart;
