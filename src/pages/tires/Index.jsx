import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { SlArrowRight } from "react-icons/sl";
import Container from "../../UI/Container";
import Background from "../../assets/hombg.png";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";
import BMW from "../../assets/BMW.svg";
import WV from "../../assets/WV.svg";
import HONDA from "../../assets/HONDA.svg";
import Tyers from "../../assets/Tyers.svg";
import Volum from "../../assets/volum.png";
import Nissan from "../../assets/nissan.svg";
import RIM_Size from "../../assets/size-tyer.png";
import On from "../../assets/on.svg";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoClose, IoHeartOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useProductStore from "../../store/productsStore";

export default function Tires() {
  return (
    <div>
      <Section1 />
      <Container>
        <Section2 />
        <Section3 />
      </Container>
    </div>
  );
}

const Section1 = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rim, setRim] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (width && height && rim) {
      setShowModal(true);
    }
  }, [width, height, rim]);

  const tyreOptions = [
    { label: "225/60R16", img: Tyers },
    { label: "235/65R17", img: Tyers, onImg: On },
    { label: "245/45R18", img: Tyers },
    { label: "255/55R19", img: Tyers, onImg: On },
    { label: "255/55R19", img: Tyers },
    { label: "255/55R19", img: Tyers },
  ];
  return (
    <div className="relative bg-[#FBFBFB]  flex items-center justify-center overflow-hidden">
      {/* Right Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute right-0 top-0 h-full object-cover"
      />

      {/* Modal in Center */}
      <div className="relative bg-[#F0EDED] w-[60%] md:w-[90%] rounded-[50px] my-10">
        <div className="z-10 bg-[#FFFFFF] py-10 md:pb-28 px-20 xl:px-10 rounded-[30px] my-12 mx-16 xl:mx-4">
          <div className="flex items-center gap-4 mb-4 ">
            <h3 className=" text-sm font-semibold text-Brand cursor-pointer">
              Search by Car
            </h3>
            <h3 className=" cursor-pointer  text-sm  font-semibold ">
              Search by Car
            </h3>
          </div>
          <div>
            {/* Car Info: Make, Model, Year */}
            <form className="space-y-4 text-sm">
              <div className="flex md:flex-col gap-2 ">
                <select
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-1/4 md:w-full border border-Brand rounded-md p-3 outline-none cursor-pointer"
                >
                  <option>Width</option>
                  <option>20</option>
                </select>
                <select
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-1/4 md:w-full text-gray-500  rounded-md p-3 bg-[#E3E3E3] outline-none cursor-pointer"
                >
                  <option>Height</option>
                  <option>50</option>
                </select>
                <select
                  onChange={(e) => setRim(e.target.value)}
                  className="w-1/4 md:w-full text-gray-500  rounded-md p-3 bg-[#E3E3E3] outline-none cursor-pointer"
                >
                  <option>RIM size</option>
                  <option>16</option>
                </select>
                <img
                  src={RIM_Size}
                  className="absolute right-[10%] md:right-[31%] bottom-[48px]  rounded-3xl h-24 xl:h-16"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Modal Overlay */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg mx-12 md:mx-2 p-6 w-[70%] items-center">
              <h2 className="text-xl text-center font-semibold mb-4">
                Please Select Size
              </h2>
              <div className="flex flex-wrap md:flex-col items-center justify-center gap-5 xl:gap-4 py-10">
                {tyreOptions.map(({ label, img, onImg }) => (
                  <button
                    key={label}
                    className={`relative flex items-center md:gap-2 text-sm font-semibold border rounded-lg hover:bg-gray-100
        ${onImg ? "pl-6 w-40 md:w-48" : "w-40 px-6 md:w-48"}`}
                  >
                    <img src={img} alt={label} className="h-8" />
                    <span className="flex-1 text-center">{label}</span>
                    {onImg && (
                      <img
                        src={onImg}
                        alt={`${label} selected`}
                        className="h-8 rounded"
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-700"
              >
                <IoClose size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Section2 = () => {
  const Brands = [
    { id: 1, image: BMW },
    { id: 2, image: WV },
    { id: 3, image: HONDA },
    { id: 4, image: BMW },
    { id: 5, image: WV },
    { id: 5, image: HONDA },
    { id: 5, image: BMW },
    { id: 5, image: WV },
    { id: 5, image: HONDA },
    { id: 5, image: BMW },
    { id: 5, image: WV },
  ];
  return (
    <div>
      <div className="flex md:flex-col justify-around md:items-center gap-4 py-4  font-semibold mb-10">
        {/* Step1 */}
        <div className="flex items-center gap-2 text-lg">
          <img src={Step1} alt="Step1" />
          <div className="w-28">
            <span className="text-Brand">1.</span> SELECT YOUR TYRES
          </div>
          <SlArrowRight className="size-12 text-gray-300" />
        </div>
        {/* Step2 */}
        <div className="flex items-center gap-2 text-lg">
          <img src={Step2} alt="Step2" />
          <div className="w-28">
            <span className="text-Brand">2.</span> SELECT INSTALLER
          </div>
          <SlArrowRight className="size-12 text-gray-300" />
        </div>
        {/* Step3 */}
        <div className="flex items-center gap-2 text-lg">
          <img src={Step3} alt="Step3" />
          <div className="w-28">
            <span className="text-Brand">3.</span> ORDER & PAY ONLINE
          </div>
          <SlArrowRight className="size-12 text-gray-300" />
        </div>
        {/* Step4 */}
        <div className="flex items-center gap-2 text-lg">
          <img src={Step4} alt="Step4" />
          <div className="w-28">
            <span className="text-Brand">4.</span> WE INSTALL YOUR TYRES
          </div>
          <SlArrowRight className="size-12 text-gray-300" />
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        loop={true}
      >
        {Brands.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="max-w-16 h-16 flex items-center justify-center mx-auto">
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className="object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Details */}
      <div className="mt-10">
        <h3 className="text-start text-2xl font-bold my-4">
          Find Any Spare Parts, All Makes, All Models
        </h3>
        <div className="flex gap-4">
          <p className="w-1/2 text-start">
            Everything you need, in one place, and simplified. Whether you want
            batteries, tires, or any spare part you can think of, we have it.
          </p>
          <p className="w-1/2 text-start">
            Everything you need, in one place, and simplified. Whether you want
            batteries, tires, or any spare part you can think of, we have it.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  const [openFilters, setOpenFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { setSelectedProduct } = useProductStore();
  const toggleFilter = (name) => {
    setOpenFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
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

  const filters = [
    {
      name: "Brand",
      options: ["Nissan", "Mazda", "Toyota"],
    },
    {
      name: "Year",
      options: ["2025", "2024", "2023"],
    },
    {
      name: "Filter 1",
      options: [
        "This past week",
        "This past week",
        "This past week",
        "This past week",
      ],
    },
    {
      name: "Filter 2",
      options: [],
    },
    {
      name: "Filter 3",
      options: [],
    },
  ];
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts =
    products.length >= 9
      ? products.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )
      : products;

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
                  <h3 className="font-medium">{filter.name}</h3>
                  {isOpen ? (
                    <RiArrowUpSFill className="size-6 text-Brand" />
                  ) : (
                    <RiArrowDownSFill className="size-6 text-Brand" />
                  )}
                </div>
                <hr className="border-gray-300 my-4" />
                {isOpen && (
                  <ul className="pl-4 mt-1 space-y-1 text-gray-500">
                    {filter.options.length > 0 ? (
                      filter.options.map((option, idx) => (
                        <li key={idx}>
                          <label className="flex items-center justify-between ">
                            {option}
                            <input type="checkbox" className="cursor-pointer" />
                          </label>
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-500 italic">
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
        <div className="flex-[3] bg-white p-4 rounded-md">
          <h2 className="text-lg text-gray-500 text-center font-semibold mb-4">
            All Prices VAT Inclusive
          </h2>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={() => setSelectedProduct(product)}
              >
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
                      <span className="text-gray-400">AED</span> $
                      {product.price}
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
              </Link>
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
                      ? "bg-Brand text-white"
                      : "bg-white text-Brand"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
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
