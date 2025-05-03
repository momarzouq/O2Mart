import React, { useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import TyreImg from "../../assets/Tyers.svg";
import BrandLogo from "../../assets/nissan.svg";
import Volum from "../../assets/volum.png";
import Tyers from "../../assets/Tyers.svg";
import Nissan from "../../assets/nissan.svg";
import Container from "../../UI/Container";
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
  img: TyreImg,
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
    rating: 4.2,
    // …other fields if needed
  };
export default function ProductDetails() {
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
      <div className="space-y-10">
        <Section1 />
        <Section2 product={detailProduct} renderStars={renderStars} />
        <Section3 />
      </div>
    </Container>
  );
}

const Section1 = () => {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div>
        <img src={Tyers} className="object-cover rounded h-40 my-6" />
        <p className="mt-2 text-sm text-gray-500">
          Closest Matching image shown
        </p>
      </div>
      <div className=" space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <img src={product.brandLogo} alt="" className="h-8 inline-block" />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.sku}</p>
          </div>
          <div className="flex gap-4 text-2xl text-gray-500">
            <AiOutlineShareAlt />
            <IoHeartOutline />
          </div>
        </div>
        {/* Pricing + quantity */}
        <div className="flex items-center gap-4">
          <div>
            <p className="text-2xl font-semibold">AED {product.price}</p>
            <p className="text-sm text-gray-400 line-through">
              AED {product.original}
            </p>
            {/* <p className="text-xs text-gray-500">
              Set of {product.setOf.size}: AED {product.setOf.total}
            </p> */}
          </div>
          <select
            value={qty}
            onChange={(e) => setQty(+e.target.value)}
            className="border rounded px-2 py-1"
          >
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full">
            Add to cart
          </button>
        </div>
        {/* Specs */}
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {specsList.map((s) => (
            <li key={s.label} className="flex justify-between">
              <span>{s.label}:</span>
              <span className="font-semibold">{s.value}</span>
            </li>
          ))}
        </ul>
        {/* Services */}
        <div className="flex gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">🚚 Fast Delivery</div>
          <div className="flex items-center gap-2">🚐 Van Service</div>
          <div className="flex items-center gap-2">🔧 Free Installation</div>
        </div>
      </div>

      {/* Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-700">
        <p>
          Everything you need, in one place, and simplified. Whether you want
          batteries, tires, or any spare part you can think of, we have it.
        </p>
        <p>
          Everything you need, in one place, and simplified. Whether you want
          batteries, tires, or any spare part you can think of, we have it.
        </p>
      </div>
      <hr />
    </div>
  );
};

const Section2 = ({ product, renderStars }) => {
  return (
    <div>
      <div className="flex space-y-4">
        <h3 className="text-xl font-semibold">Ratings & Reviews</h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">{product.rating.toFixed(1)}</p>
            <p className="text-sm text-gray-500">Average Ratings</p>
            {renderStars(product.rating)}
            <p className="text-sm text-gray-500 mt-1">0 Reviews</p>
          </div>
          <div className="flex items-center gap-4">
            {renderStars(0)}
            <button className="border rounded-full px-6 py-2 text-sm">
              Write Review
            </button>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

const Section3 = () => {
  return (
    <div>
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
              <select className="absolute border outline-none rounded-2xl py-[2px] md:py-0 px-4 cursor-pointer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <button className=" text-sm text-gray-500 border border-Brand rounded-2xl py-1 md:py-0.5 px-20 xl:px-10">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Decide */}
      <div className="flex flex-col items-start gap-4 my-20">
        <h3 className="text-3xl font-semibold">Not Sure How to Decide?</h3>
        <p className="text-gray-500">
          Lorem Ipsum is <span className="text-Brand">simply dummy </span>text
          of the printing and typesetting industry.
        </p>
      </div>
    </div>
  );
};
