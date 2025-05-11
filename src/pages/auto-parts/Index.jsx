import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import Container from "../../UI/Container";
import Background from "../../assets/hombg.png";
import { BsExclamationCircle } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";
import BMW from "../../assets/BMW.svg";
import WV from "../../assets/WV.svg";
import Volum from "../../assets/volum.png";
import Tyers from "../../assets/Tyers.svg";
import Nissan from "../../assets/nissan.svg";
import HONDA from "../../assets/HONDA.svg";
import ContactUs from "../../assets/contact-us.svg";
import { SelectingSteps } from "../../components/ProductSelectingSteps";
import { FiltersAndProducts } from "../../components/FiltersAndProducts";
import { BiMessageAltDetail } from "react-icons/bi";

export default function AutoParts() {
  const AutoPartsProducts = [
    {
      id: 1,
      name: "Mazda Motor Oil SN 5W-30 Golden",
      price: 165,
      originalPrice: 179,
      sale: true,
      offer:false,
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
      offer:false,
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
      offer:true,
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
      offer:false,
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
      offer:false,
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
      offer:false,
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
      offer:false,
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
      offer:false,
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
      offer:false,
      volume: Volum,
      image: Tyers,
      rating: 5,
      brand: Nissan,
    },
  ];

  const AutoPartsFilters = [
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
    <div className="relative ">
      <Section1 />
      <Container>
        <Section2 />
        <FiltersAndProducts
          products={AutoPartsProducts}
          filters={AutoPartsFilters}
        />
      </Container>
      {/* Contact Us */}
      <div className="absolute z-50 flex items-center gap-1 max-h-12 max-w-28 shadow-md right-24 top-[100%] bg-[#FFFFFF]">
        <img src={ContactUs} alt="Contact Us" className="pr-8" />
        <div>
          <BiMessageAltDetail className="absolute right-0 top-0 bg-Brand rounded-full p-2 text-white text-xl w-8 h-8 object-cover" />
        </div>
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="relative bg-[#FBFBFB]  flex items-center justify-center overflow-hidden">
      {/* Left Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute left-0 top-0 h-full object-cover transform scale-x-[-1]"
      />

      {/* Right Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute right-0 top-0 h-full object-cover"
      />

      {/* Modal in Center */}
      <div className="z-10 bg-white p-6 rounded-lg shadow-md w-[40%] md:w-[90%] my-12">
        <div>
          <form className="space-y-4 text-sm">
            {/* Car Info: Make, Model, Year */}
            <div className="flex gap-2">
              <select className="flex-1 border border-gray-500 rounded-md p-2">
                <option>Car Make</option>
              </select>
              <select className="flex-1 text-gray-500 border border-gray-500 rounded-md p-2 bg-[#E3E3E3]">
                <option>Model</option>
              </select>
              <select className="flex-1 text-gray-500 border border-gray-500 rounded-md p-2 bg-[#E3E3E3]">
                <option>Year</option>
              </select>
            </div>

            {/* VIN / License Upload */}
            <div className="flex gap-[18px] items-center">
              <input
                type="text"
                placeholder="Enter VIN/ Chassis Number"
                className="w-1/2 flex border border-gray-500 rounded-md py-2 px-1 "
              />
              <span className="w-[6%] flex items-center gap-1 text-md text-Brand">
                <BsExclamationCircle />
                OR
              </span>
              <button
                type="button"
                className="w-[40%] md:w-[45%] xl:text-xs border border-gray-500 rounded-md px-1.5 py-2 md:py-[10px]"
              >
                Upload car license
              </button>
            </div>

            {/* Required Part / Quantity / Upload Photo */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Required Part"
                className="w-1/2 border border-gray-500 rounded-md py-2 px-1"
              />

              <input
                type="number"
                placeholder="QTY"
                className="w-[12%] max-w-14 border border-gray-500 rounded-md  py-2 px-1"
              />

              <button
                type="button"
                className="w-[40%] md:w-[45%] text-xs border border-gray-500 rounded-md px-2"
              >
                Upload Part Photo
              </button>
            </div>

            {/* Add Another Part */}
            <button type="button" className="flex items-center text-Brand-500">
              <span className="flex items-center gap-1">
                <CiCirclePlus size={20} />
                Add Another Part
              </span>
            </button>

            {/* Contact Info */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Contact Name"
                className="flex-1 xl:w-1/2 border border-gray-500 rounded-md p-2"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 xl:w-1/2 border border-gray-500 rounded-md p-2"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 border border-gray-500 rounded-md p-2"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-1/2 text-start px-2 bg-Brand text-white py-2 md:py-0 md:text-xs rounded-md font-semibold"
              >
                Get Me The Best Offer
              </button>
            </div>
          </form>
        </div>
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
