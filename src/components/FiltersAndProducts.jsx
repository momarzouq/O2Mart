import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineCompareArrows } from "react-icons/md";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useToastStore } from "../store/useToastStore";

export const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<AiFillStar key={i} className="text-[#F29F05]" />);
  }

  if (hasHalfStar) {
    stars.push(<AiFillStar key="half" className="text-[#F29F05] opacity-50" />);
  }

  while (stars.length < 5) {
    stars.push(<AiOutlineStar key={stars.length} className="text-[#F29F05]" />);
  }

  return stars;
};

export const FiltersAndProducts = ({ products, filters }) => {
  const [openFilters, setOpenFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { showToast } = useToastStore();
  const toggleFilter = (name) => {
    setOpenFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts =
    products.length >= 9
      ? products.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )
      : products;
  useEffect(() => {
    if (products.length > 9) {
      setCurrentPage(2);
    }
  }, [products]);

  return (
    <div className="relative mt-8">
      <div className="flex md:flex-col gap-4">
        {/* Left Side - Filters */}
        <div className="flex-1 bg-white p-4 rounded-md space-y-4">
          {filters.map((filter, index) => {
            const isOpen = openFilters[filter.name] ?? true;
            return (
              <div key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFilter(filter.name)}
                >
                  <h3 className="font-semibold text-[#777777]">
                    {filter.name}
                  </h3>
                  {isOpen ? (
                    <RiArrowUpSFill className="size-6 text-Brand" />
                  ) : (
                    <RiArrowDownSFill className="size-6 text-Brand" />
                  )}
                </div>
                <hr className="border-gray-300 my-4" />
                {isOpen && (
                  <ul className="pl-4 mt-1 space-y-1 text-[#BDBDBD] font-medium">
                    {filter.options.length > 0 ? (
                      filter.options.map((option, idx) => (
                        <li key={idx}>
                          <label className="flex items-center justify-between">
                            {option}
                            <input type="checkbox" />
                          </label>
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-[#BDBDBD] italic">
                        No options
                      </li>
                    )}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side - Products */}
        <div className="flex-[3] bg-white p-6 rounded-md ">
          <div className="grid-custom gap-4">
            {paginatedProducts.map((product) => (
              <div className="relative">
                {product.offer && (
                  <p className="absolute top-0 left-0 right-0 text-center py-2 bg-Brand rounded-t-3xl text-sm font-bold text-white">
                    BUY 3,GET 1 FREE
                  </p>
                )}
                <div
                  key={product.id}
                  className="relative mt-9 flex flex-col items-center justify-center border p-4 space-y-2"
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
                    {product.sale && (
                      <span className="absolute right-4 top-10 h-10 w-10 text-xs font-semibold px-2 py-3 text-white rounded-full bg-Brand">
                        Sale
                      </span>
                    )}
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
                      <span className="line-through text-sm text-[#BDBDBD]">
                        AED {product.originalPrice}
                      </span>
                    )}
                    <span>
                      <span className="text-gray-400">AED</span>
                      <span className="font-bold"> {product.price}</span>
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
                      onClick={() => {
                        showToast("Product Added To Cart");
                      }}
                      className=" text-sm text-gray-500 border border-Brand rounded-2xl py-1 md:py-0.5 px-16 xl:px-10"
                    >
                      Add to Cart
                    </button>
                  </div>
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
                  className={`font-medium mx-2 text-sm ${
                    currentPage === index + 1 ? " text-Brand" : " text-black"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <MdKeyboardArrowRight size={20} />
            </div>
          )}
        </div>
      </div>
      {/* Decide */}
      <div className="flex flex-col items-start gap-4 mb-20">
        <h3 className="text-3xl font-semibold">Not Sure How to Decide?</h3>
        <p className="text-gray-500">
          Lorem Ipsum is <span className="text-Brand">simply dummy </span>text
          of the printing and typesetting industry.
        </p>
      </div>
    </div>
  );
};
