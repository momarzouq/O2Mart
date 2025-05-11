import React, { useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import BrandLogo from "../assets/nissan.svg";
import Volum from "../assets/volum.png";
import Tyers from "../assets/Tyers.svg";
import Dridgestone from "../assets/dridgestone.png";
import Nissan from "../assets/nissan.svg";
import Delivery from "../assets/Delivery.svg";
import Van from "../assets/Van.svg";
import Installation from "../assets/Installation.svg";
import Container from "../UI/Container";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiMessageAltDetail } from "react-icons/bi";
import ContactUs from "../assets/contact-us.svg";
const specsList = [
  { label: "Product Name", value: "Primacy 4 Mo" },
  { label: "Tyre Size", value: "235/55 19" },
  { label: "Load / Speed index", value: "105W" },
  { label: "Origin", value: "Italy" },
  { label: "Manufacturing Year", value: "2025" },
  { label: "Warranty", value: "1 Year" },
];

const relatedItems = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  brand: BrandLogo,
  img: Tyers,
  region: "UAE",
  volume: "75ml",
  name: "Mazad Motor Oil SN 5W-30 Golden",
  price: 165,
  original: 179,
  rating: 5,
}));

const renderStars = (rating) => {
  const full = Math.floor(rating),
    half = rating % 1 >= 0.5,
    stars = [];

  for (let i = 0; i < full; i++)
    stars.push(<AiFillStar key={i} className="text-[#F29F05]" />);
  if (half)
    stars.push(<AiFillStar key="h" className="text-[#F29F05] opacity-50" />);
  while (stars.length < 5)
    stars.push(<AiOutlineStar key={stars.length} className="text-[#F29F05]" />);

  return <div className="flex items-center gap-1">{stars}</div>;
};

const product = [
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
const detailProduct = {
  id: 1,
  rating: 5,
  size: "text-lg",
};
export default function ProductDetails() {
  const renderStars = (rating, size) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i} className={`text-gray-400 `} />);
    }

    while (stars.length < 5) {
      stars.push(
        <AiOutlineStar
          key={stars.length}
          className={`text-[#F29F05] ${size}`}
        />
      );
    }

    return stars;
  };

  return (
    <Container className="relative">
      <div className="space-y-10">
        <Section1 />
        <Section2 product={detailProduct} renderStars={renderStars} />
        <Section3 />
      </div>
      {/* Contact Us */}
      <div className="absolute z-50 flex items-center gap-1 max-h-12 max-w-28 shadow-md right-0 top-[100%] bg-[#FFFFFF]">
        <img src={ContactUs} alt="Contact Us" className="pr-8" />
        <div>
          <BiMessageAltDetail className="absolute right-0 top-0 bg-Brand rounded-full p-2 text-white text-xl w-8 h-8 object-cover" />
        </div>
      </div>
    </Container>
  );
}

const Section1 = () => {
  const [qty, setQty] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative">
      {isModalOpen && (
        <div className="absolute z-50 top-[28%] md:top-[26%] left-[30%] md:left-0 bg-[#EFEFEF] shadow-md shadow-[#EFEFEF] rounded-2xl px-4 py-3">
          <p className="text-sm ">
            Image shows typical or closest match, but supplied item will always
            match your
            <br /> order specifications
          </p>
        </div>
      )}
      <div className="flex md:flex-col items-center gap-8">
        {/* Right side */}
        <div className="flex-1">
          <img
            src={Tyers}
            className="object-cover rounded h-40 my-6 md:mx-auto"
          />
          <p className="flex items-center font-semibold gap-1 mt-2 text-sm">
            Closest Matching image shown
            <HiOutlineExclamationCircle
              className="text-gray-400 size-4 cursor-pointer"
              onClick={() => setIsModalOpen((prev) => !prev)}
            />
          </p>
        </div>

        {/* Middle side*/}
        <div className="flex-1 flex-col space-y-8">
          <div className="flex flex-col items-center">
            <img src={Dridgestone} alt="Dridgestone" />
            <p className="text-sm font-semibold">175/65R14 86T Street-H HHH</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-semibold">
                175/65R14 86T Street-H HHH
              </p>
              <div className="flex gap-1 items-center">
                <p className="text-sm line-through">AED {product.original}</p>
                <p className="font-semibold">AED{product.price}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-sm">Set of 4: {product.original}</p>
                <p className="text-sm line-through">AED {product.original}</p>
                <p className="font-semibold">{product.price}</p>
              </div>
            </div>
            <div className="relative">
              <select
                value={qty}
                onChange={(e) => setQty(+e.target.value)}
                className="absolute border outline-none rounded-2xl py-[4px] md:py-0.5 px-4"
              >
                {[...Array(5)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <button className=" text-sm text-white border bg-Brand rounded-2xl py-1.5 md:py-1 px-20 xl:px-10 md:ml-6">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Left side */}
        <div className="flex-1">
          <div className="flex items-end md:justify-center justify-end gap-4 text-3xl text-gray-400 my-8">
            <AiOutlineShareAlt className="hover:text-Brand" />
            <Link to="/comparsion">
              <MdOutlineCompareArrows className="hover:text-Brand" />
            </Link>
            <IoHeartOutline className="hover:text-Brand" />
          </div>
          <div className="flex items-end justify-end gap-6">
            <ul className="spec-list">
              {specsList.map((s) => (
                <li key={s.label}>
                  <span className="font-semibold">{s.label}:</span>
                </li>
              ))}
            </ul>
            <ul>
              {specsList.map((s) => (
                <li key={s.label}>
                  <span>{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="flex md:flex-col items-center justify-center gap-16 md:gap-8 text-xs font-semibold  mt-6">
        <span className="flex items-center gap-1">
          <img src={Delivery} alt="Delivery" className="h-12" />
          Fast
          <br /> Delivery
        </span>
        <span className="flex items-center gap-1">
          <img src={Van} alt="Van" className="h-12" />
          Van
          <br /> Services
        </span>
        <span className="flex items-center gap-1">
          <img src={Installation} alt="Installation" />
          Free
          <br /> Installation
        </span>
        <p className="flex items-center gap-2 md:text-lg">
          *Terms & Conditions Applied
        </p>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-8 my-8">
        <h3 className="text-xl font-bold">
          Find Any Spare Parts, All Makes, All Models
        </h3>
        <div className="flex gap-10 text-gray-500">
          <p className="w-1/2">
            Everything you need, in one place, and simplified. Whether you want
            batteries, tires, or any spare part you can think of, we have it.
          </p>
          <p className="w-1/2">
            Everything you need, in one place, and simplified. Whether you want
            batteries, tires, or any spare part you can think of, we have it.
          </p>
        </div>
      </div>
      <hr className="border-gray-500" />
    </div>
  );
};

const Section2 = ({ product, renderStars }) => {
  const [rating, setRating] = useState(0);
  const [openReview, setOpenReview] = useState(false);
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 md:text-center">
        Ratings & Reviews
      </h3>
      <div className="flex md:flex-col space-y-4">
        <div className="flex md:flex-col  items-center gap-28 md:gap-6 my-4">
          {/* Left */}
          <div className="flex-1 space-y-1 ">
            <p className="text-sm font-semibold">RATINGS</p>
            <p className="text-sm md:text-xs text-gray-500 whitespace-nowrap">
              Average Ratings
            </p>
            <p className="flex md:text-xs">{renderStars(product.rating)}</p>
            <p className="text-sm md:text-xs text-gray-500 mt-1">0 Reviews</p>
          </div>
          <div className="w-px h-28 bg-gray-300 md:hidden" />
          {/* Middle */}
          <div>
            <p className="flex-1 text-lg">
              Rate this product
              <p className="flex">{renderStars(0, "text-3xl")} </p>
            </p>
          </div>
          {/* Right */}
          <button
            onClick={() => setOpenReview((prev) => !prev)}
            className="flex-1 border border-Brand rounded-full px-16 md:px-2 py-1 text-sm"
          >
            Write Review
          </button>
        </div>
      </div>
      <hr className="border-gray-500" />
      {/* Write you rating */}
      {openReview && (
        <form className="flex flex-col mx-auto p-4 space-y-4">
          <p className="text-sm">You are reviewing:</p>
          <h2 className="text-lg font-bold">
            Bridgestone 175/65R14 Street-H HHo1
          </h2>

          <div>
            <label className="block font-semibold">
              Your Rating <span className="text-Brand">*</span>
            </label>
            <div className="flex items-center gap-1 mt-1">
              Rating
              {[1, 2, 3, 4, 5].map((i) => (
                <AiFillStar
                  key={i}
                  size={16}
                  className={`cursor-pointer ${
                    i <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(i)}
                />
              ))}
            </div>
          </div>
          <label className="block font-semibold">
            Name <span className="text-Brand">*</span>
            <input
              type="text"
              className="w-full border rounded p-2 text-sm outline-none focus:border-Brand"
              required
            />
          </label>
          <label className="block font-semibold">
            Summary <span className="text-Brand">*</span>
            <input
              type="text"
              className="w-full border rounded p-2 text-sm outline-none focus:border-Brand"
              required
            />
          </label>
          <label className="block font-semibold">
            Review <span className="text-Brand">*</span>
            <textarea
              className="w-full border rounded p-2 text-sm outline-none focus:border-Brand"
              rows={4}
              required
            />
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 md:w-1/2 bg-Brand text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const Section3 = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Related Products</h3>
      <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
        {product.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center justify-center border p-4 "
          >
            {/* Brand Of Product & Add To Favorit & Comprison */}
            <div className="flex items-center">
              <img
                src={product.brand}
                alt={product.brand}
                className="absolute left-4 top-2 object-cover rounded h-12"
              />
              <IoHeartOutline className="absolute right-4 top-2 size-6 cursor-pointer" />
              <MdOutlineCompareArrows className="absolute right-11 top-2 size-6 cursor-pointer" />
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded h-20 my-6"
            />
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
              <select className="absolute border top-2 outline-none rounded-2xl py-[2px] md:py-0 px-4 cursor-pointer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <button className=" text-sm text-gray-500 border border-Brand rounded-2xl py-1 md:py-0.5 px-20 xl:px-10 mt-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decide */}
      <div className="flex flex-col items-start gap-4 my-20">
        <h3 className="text-3xl font-semibold">Need Help?</h3>
        <p className="text-gray-500">
          Lorem Ipsum is <span className="text-Brand">simply dummy </span>text
          of the printing and typesetting industry.
        </p>
      </div>
    </div>
  );
};
