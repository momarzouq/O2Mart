import React, { useState } from "react";
import Container from "../UI/Container";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import Volum from "../assets/volum.png";
import Tyers from "../assets/Tyers.svg";
import Nissan from "../assets/nissan.svg";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
export default function Cart() {
  const [isAdded, setIsAdded] = useState(false);
  const handleClick = () => {
    setIsAdded(true);
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
  return (
    <Container>
      <div className="flex flex-col space-y-6 my-4">
        <h3 className="text-xl font-bold">Cart</h3>
        <p className="text-sm font-bold">
          Your cart is empty. Start shopping now
        </p>
        <h3 className="text-2xl font-bold">New in store</h3>
      </div>

      {/* Right Side - Products */}
      <div className="flex-[3] bg-white p-6 rounded-md ">
        <div className="grid-custom-cart gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col items-center justify-center border p-4 space-y-2"
            >
              {/* Brand Of Product & Add To Favorit & Comprison */}
              <div className=" flex items-center">
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
                  <span className="text-gray-400">AED</span> ${product.price}
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
        {/* Pagination */}
        {products.length >= 9 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full border text-sm ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
