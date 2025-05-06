import React, { useState } from "react";
import Container from "../UI/Container";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import Volum from "../assets/volum.png";
import Tyers from "../assets/Tyers.svg";
import Nissan from "../assets/nissan.svg";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Breadcrumb } from "../UI/Breadcrumb";
import CouponSection from "./AddCupon";
import QuantityItem from "./QuantityItem";

export default function Cart() {
  const [isAdded, setIsAdded] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ACDeleo 123123123 Doxron VI Transmission Fluid (IL)",
      image: Tyers,
      price: 32.0,
      quantity: 1, 
      deliveryOptions: [
        "Delivery Only",
        "Delivery with Installation",
        "Installation Center",
      ],
      description:
        "Items will be shipped to your designated address. Shipping costs will be calculated during the checkout process",
    },
    {
      id: 2,
      name: "Varta 12V 70AH Battery",
      image: Tyers,
      price: 300.0,
      quantity: 1,
      deliveryOptions: [
        "Delivery Only",
        "Delivery with Installation",
        "Installation Center",
      ],
      description:
        "Get professional installation at your doorstep. Service cost is a flat AED200. Click here to select a mobile installer before checkout.",
    },
    {
      id: 3,
      name: "Bridgestone 225/50 R17",
      image: Tyers,
      price: 160.0,
      quantity: 1, 
      deliveryOptions: [
        "Delivery Only",
        "Delivery with Installation",
        "Installation Center",
      ],
    },
    {
      id: 4,
      name: "18° Mazda AMG 5 Spoke Original Wheels",
      image: Tyers,
      price: 1200.0,
      quantity: 1, 
      deliveryOptions: [
        "Delivery Only",
        "Delivery with Installation",
        "Installation Center",
      ],
    },
  ]);

  const increment = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleClick = () => {
    setIsAdded(true);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={i} className="text-[#F29F05]" />);
    }

    if (hasHalfStar) {
      stars.push(
        <AiFillStar key="half" className="text-[#F29F05] opacity-50" />
      );
    }

    while (stars.length < 5) {
      stars.push(
        <AiOutlineStar key={stars.length} className="text-[#F29F05]" />
      );
    }

    return stars;
  };

  const products = [
    {
      id: 1,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: true,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
    {
      id: 2,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: true,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
    {
      id: 3,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: true,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
    {
      id: 4,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: false,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const installationFee = 200;
  const total = subtotal + installationFee;

  return (
    <Container>
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "Shop" },
          { label: "Cart" },
        ]}
      />
      <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col space-y-6 my-4">
            <h3 className="text-xl font-bold">Cart</h3>
            <p className="text-sm font-bold">
              Your cart is empty. Start shopping now
            </p>
            <h3 className="text-2xl font-bold">New in store</h3>
          </div>
        ) : (
          <div className="grid col-span-2 gap-6 my-4">
            {/* Left Side - Cart Items */}
            <div className="col-span-2 bg-white p-6 rounded-md">
              <div className="flex justify-between items-center font-medium border-b pb-3 mb-4">
                <h3>PRODUCT</h3>
                <h3>SUBTOTAL</h3>
              </div>

              {cartItems.map((item) => (
                // Left Side
                <div key={item.id} className="border-b pb-6 mb-6">
                  <div className="flex items-start justify-between">
                    {/* Left section */}
                    <img src={item.image} className="h-20 w-20" />
                    {/* Middle */}
                    <div>
                      <div className="flex items-start justify-between gap-16">
                        <div>
                          <h4 className="w-[350px] font-medium">{item.name}</h4>
                          <p className="font-medium my-1">
                            {item.price.toFixed(2)} AED
                          </p>
                        </div>
                        <div className="flex  items-center">
                          <div className="flex flex-col items-center">
                            <QuantityItem
                              item={item}
                              increment={increment}
                              decrement={decrement}
                              removeItem={handleRemoveItem}
                            />
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-xs text-gray-700 hover:text-red-500 underline"
                            >
                              Remove Item
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center  gap-4 my-2">
                        {item.deliveryOptions.map((option, index) => (
                          <span
                            key={index}
                            className="flex items-center gap-1 text-sm text-gray-600"
                          >
                            <input
                              type="checkbox"
                              className="appearance-none w-3 h-3 rounded-full border border-gray-400 checked:bg-Brand checked:border-transparent focus:outline-none"
                            />
                            {option}
                            {index < item.deliveryOptions.length - 1}
                          </span>
                        ))}
                      </div>
                      {item.description && (
                        <p className="w-[500px] text-sm text-gray-500 mt-2 border border-Brand rounded py-1 px-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    {/* Right */}
                    <p className="font-semibold ">{item.price.toFixed(2)}AED</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side */}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="col-span-1 bg-white p-6 rounded-md h-fit">
            <h3 className="font-medium border-b mb-4 pb-2">ORDER SUMMARY</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>{subtotal.toFixed(2)} AED</span>
              </div>

              <div className="flex justify-between items-center border-y pt-6 ">
                <CouponSection />
              </div>

              <div className="flex justify-between">
                <span>Installation Fees</span>
                <span>{installationFee} AED</span>
              </div>

              <div className="flex justify-between pt-4 border-t font-bold text-lg">
                <span>Total</span>
                <span>{total.toFixed(2)} AED</span>
              </div>

              <button className="text-xs font-medium w-full bg-Brand text-white py-[9px] rounded-md mt-4 transition">
                Proceed to Checkout
              </button>

              <button className="text-xs font-medium w-full border border-Brand text-Brand py-2 rounded-md mt-1 transition">
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
      {/* New Products Section - Shown when cart is empty */}
      {cartItems.length === 0 && (
        <div className="flex-[3] bg-white p-6 rounded-md">
          <div className="grid-custom-cart gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col items-center justify-center border p-4 space-y-2"
              >
                {/* Brand Of Product & Add To Favorit & Comprison */}
                <div className="flex items-center">
                  <img
                    src={product.brand}
                    alt={product.brand}
                    className="absolute left-4 top-2 object-cover rounded h-12"
                  />
                  <IoHeartOutline className="absolute right-4 top-2 size-6 hover:text-Brand" />
                  <Link to="/comparsion">
                    <MdOutlineCompareArrows className="absolute right-11 top-2 size-6 hover:text-Brand" />
                  </Link>
                </div>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover rounded h-20 my-6 flex justify-center"
                  />
                </Link>
                <img
                  src={product.volume}
                  alt={product.name}
                  className="object-cover"
                />
                <h3 className="mt-2 font-semibold w-48 text-center">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(product.rating)}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {product.originalPrice && (
                    <span className="line-through text-sm text-gray-400">
                      AED {product.originalPrice}
                    </span>
                  )}
                  <span className="font-semibold">
                    <span className="text-gray-400">AED</span> {product.price}
                  </span>
                </div>

                <div className="relative">
                  <select className="absolute border outline-none rounded-2xl py-[2px] md:py-0 px-4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <button
                    onClick={handleClick}
                    className={`text-sm text-gray-500 border border-Brand rounded-2xl py-1 md:py-0.5 px-20 xl:px-10 transition-colors duration-300 ${
                      isAdded ? "bg-Brand text-white" : ""
                    }`}
                  >
                    {isAdded ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}

{
  /* Quantity and Remove */
}
{
  /*  */
}
