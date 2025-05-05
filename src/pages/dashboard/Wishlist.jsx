import React from "react";
import { Breadcrumb } from "../../UI/Breadcrumb";
import DashboardSideNav from "../../UI/DashboardSideNav";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import Volum from "../../assets/volum.png";
import Tyers from "../../assets/Tyers.svg";
import Nissan from "../../assets/nissan.svg";
import { renderStars } from "../../components/FiltersAndProducts";

const Wishlist = () => {
  const TiresProducts = [
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
    {
      id: 5,
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
      id: 6,
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
      id: 7,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: false,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
    {
      id: 8,
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
      id: 9,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: true,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
  ];

  return (
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "My wishlist" }]}
        />
        <h2 className="text-2xl font-bold">My wishlist</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
        <DashboardSideNav />
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {TiresProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="relative flex flex-col items-center justify-center border p-4 hover:shadow-lg"
            >
              <div className="relative flex flex-col items-center justify-center p-4 ">
                {/* Brand Of Product & Add To Favorit & Comprison */}
                <div className="flex items-center">
                  <img
                    src={product.brand}
                    alt={product.brand}
                    className="absolute left-4 top-2 object-cover rounded h-12"
                  />
                  <IoHeartOutline className="absolute right-4 top-2 size-6" />
                  <MdOutlineCompareArrows className="absolute right-11 top-2 size-6" />
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
                  <select className="absolute border outline-none rounded-2xl py-[2px] md:py-0 px-4">
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
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Wishlist;
