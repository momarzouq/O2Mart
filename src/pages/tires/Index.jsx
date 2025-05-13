import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import Container from "../../UI/Container";
import Background from "../../assets/hombg.png";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";
import BMW from "../../assets/BMW.svg";
import WV from "../../assets/WV.svg";
import HONDA from "../../assets/HONDA.svg";
import Volum from "../../assets/volum.png";
import Tyers from "../../assets/Tyers.svg";
import Nissan from "../../assets/nissan.svg";
import RIM_Size from "../../assets/size-tyer.png";
import On from "../../assets/on.svg";
import ContactUs from "../../assets/contact-us.svg";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { SelectingSteps } from "../../components/ProductSelectingSteps";
import { FiltersAndProducts } from "../../components/FiltersAndProducts";
import { BiMessageAltDetail, BiSolidDownArrow } from "react-icons/bi";

export default function Tires() {
  const TiresProducts = [
    {
      id: 1,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: true,
      offer: false,
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
      sale: false,
      offer: false,
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
      offer: true,
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
      offer: false,
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
      offer: false,
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
      sale: false,
      offer: false,
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
      offer: false,
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
      offer: false,
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
      offer: false,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
  ];

  const TiresFilters = [
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
  return (
    <div className="relative">
      <Section1 />
      <Container>
        <Section2 />
        <FiltersAndProducts products={TiresProducts} filters={TiresFilters} />
      </Container>
      {/* Contact Us */}
      <div className="absolute z-50 flex items-center gap-1 max-h-12 max-w-28 shadow-md right-24 md:right-10 top-[100%] bg-[#FFFFFF]">
        <img src={ContactUs} alt="Contact Us" className="pr-8" />
        <div>
          <BiMessageAltDetail className="absolute right-0 top-0 bg-Brand rounded-full p-2 text-white text-xl w-8 h-8 object-cover" />
        </div>
      </div>
    </div>
  );
}

const Section1 = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rim, setRim] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchBy, setSearchBy] = useState("size"); // 'size' or 'car'

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

  const handleSearchByChange = (type) => {
    setSearchBy(type);
    // Reset form when switching search type
    setWidth("");
    setHeight("");
    setRim("");
  };

  return (
    <div className="relative bg-[#FBFBFB] flex items-center justify-center overflow-hidden">
      {/* Right Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute right-0 top-0 h-full object-cover"
      />

      {/* Modal in Center */}
      <div className="relative bg-[#F0EDED] w-[60%] md:w-[90%] rounded-[50px] my-10">
        <div className="absolute search-container top-8 flex items-center gap-2 ">
          <h3
            className={`text-sm rounded py-1 px-2 h-12 font-semibold cursor-pointer ${
              searchBy === "size" ? "bg-[#FFFFFF] text-Brand" : "bg-[#FFFFFF]"
            }`}
            onClick={() => handleSearchByChange("size")}
          >
            Search by Size
          </h3>
          <h3
            className={`text-sm rounded py-1 px-2 h-12 font-semibold cursor-pointer ${
              searchBy === "car" ? "bg-[#FFFFFF] text-Brand" : "bg-[#FFFFFF]"
            }`}
            onClick={() => handleSearchByChange("car")}
          >
            Search by Car
          </h3>
        </div>
        <div
          className={`z-10 bg-[#FFFFFF] py-4 ${
            searchBy === "size" ? "pb-0" : "pb-4"
          } px-20 xl:px-10 rounded-[30px] my-12 mx-16 xl:mx-4`}
        >
          <div>
            {/* Car Info: Width, Height, RIM */}
            <form className="space-y-4 text-sm">
              <div className="flex lg:flex-col gap-2 justify-center">
                {/* Width Select (Always Active with Border-2) */}
                <div className="w-1/4 lg:w-full relative flex items-center">
                  <select
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full border-2 border-Brand rounded-md p-3 pr-10 outline-none cursor-pointer appearance-none"
                  >
                    <option value="">Width</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                  <BiSolidDownArrow className="absolute right-3 text-Brand pointer-events-none" />
                </div>

                {/* Height Select (Conditional Border and Disabled State) */}
                <div className="w-1/4 lg:w-full relative flex items-center">
                  <select
                    onChange={(e) => setHeight(e.target.value)}
                    disabled={!width}
                    className={`w-full border-2 rounded-md p-3 pr-10 outline-none cursor-pointer appearance-none ${
                      width
                        ? "border-Brand bg-white text-black"
                        : " bg-[#E3E3E3] text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <option value="">Height</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                  </select>
                  <BiSolidDownArrow
                    className={`absolute right-3 ${
                      width ? "text-Brand" : "text-gray-500"
                    } pointer-events-none`}
                  />
                </div>

                {/* RIM/Year Select (Conditional Border and Disabled State) */}
                <div className="w-1/4 lg:w-full relative flex items-center">
                  <select
                    onChange={(e) => setRim(e.target.value)}
                    disabled={!height}
                    className={`w-full border-2 rounded-md p-3 pr-10 outline-none cursor-pointer appearance-none ${
                      height
                        ? "border-Brand bg-white text-black"
                        : " bg-[#E3E3E3] text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <option value="">
                      {searchBy === "size" ? "RIM size" : "Year"}
                    </option>
                    <option value="16">
                      {searchBy === "size" ? "16" : "2020"}
                    </option>
                    <option value="17">
                      {searchBy === "size" ? "17" : "2021"}
                    </option>
                  </select>
                  <BiSolidDownArrow
                    className={`absolute right-3 ${
                      height ? "text-Brand" : "text-gray-500"
                    } pointer-events-none`}
                  />
                </div>

                {/* RIM SIZE Image - Only shown when searching by size */}
                {searchBy === "size" && (
                  <div className="flex lg:justify-center mt-4">
                    <img src={RIM_Size} className="rounded-3xl h-24 " />
                  </div>
                )}
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
      <SelectingSteps
        steps={[
          { img: Step1, title: "SELECT YOUR TYRES" },
          { img: Step2, title: "SELECT INSTALLER" },
          { img: Step3, title: "ORDER & PAY ONLINE" },
          { img: Step4, title: "WE INSTALL YOUR TYRES" },
        ]}
      />

      {/* Swiper Section */}
      <Swiper
        className="mt-16"
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
          <p className="w-1/2 text-start text-gray-500">
            Everything you need, in one place, and simplified. Whether you want
            batteries, tires, or any spare part you can think of, we have it.
          </p>
          <p className="w-1/2 text-start text-gray-500">
            Everything you need, in one place, and simplified. Whether you want
            batteries, tires, or any spare part you can think of, we have it.
          </p>
        </div>
      </div>
    </div>
  );
};
