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
import Volum from "../../assets/volum.png";
import Tyers from "../../assets/Tyers.svg";
import Nissan from "../../assets/nissan.svg";
import WV from "../../assets/WV.svg";
import HONDA from "../../assets/HONDA.svg";
import ContactUs from "../../assets/contact-us.svg";
import { SelectingSteps } from "../../components/ProductSelectingSteps";
import { FiltersAndProducts } from "../../components/FiltersAndProducts";
import { BiMessageAltDetail, BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";

export default function Rims() {
  const RimsProducts = [
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
      sale: true,
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
      offer: false,
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
      sale: true,
      offer: true,
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

  const RimsFilters = [
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
        <FiltersAndProducts products={RimsProducts} filters={RimsFilters} />
      </Container>
    </div>
  );
}

const Section1 = () => {
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

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
        <h3 className="absolute left-[64px] md:left-2 top-8 rounded h-14 py-1 px-2 text-xs bg-[#FFFFFF] font-semibold text-Brand mb-2">
          Search by Car
        </h3>
        <div className="z-10 bg-[#FFFFFF] py-10 px-20 rounded-[30px] my-12 mx-16 md:mx-2">
          <div>
            {/* Car Info: Make, Model, Year */}
            <form className="space-y-4 text-sm">
              <div className="flex lg:flex-col gap-2 relative">
                {/* Car Make Select */}
                <div className="relative flex-1">
                  <select
                    onChange={(e) => setCarMake(e.target.value)}
                    className={`w-full border-2 rounded-md p-3 outline-none appearance-none cursor-pointer border-Brand
                    `}
                  >
                    <option value="">Car Make</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                    <BiSolidDownArrow className="text-Brand" />
                  </div>
                </div>

                {/* Model Select (Disabled until Car Make is selected) */}
                <div className="relative flex-1">
                  <select
                    onChange={(e) => setCarModel(e.target.value)}
                    disabled={!carMake}
                    className={`w-full border-2 rounded-md p-3 outline-none appearance-none cursor-pointer ${
                      carMake
                        ? "border-Brand bg-white"
                        : " bg-[#E3E3E3] cursor-not-allowed"
                    }`}
                  >
                    <option value="">Model</option>
                    {carMake === "Toyota" && (
                      <>
                        <option value="Corolla">Corolla</option>
                        <option value="Camry">Camry</option>
                      </>
                    )}
                    {carMake === "Ford" && (
                      <>
                        <option value="Focus">Focus</option>
                        <option value="Mustang">Mustang</option>
                      </>
                    )}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                    <BiSolidDownArrow
                      className={`${
                        carMake
                          ? "text-Brand"
                          : "text-gray-500 cursor-not-allowed"
                      }`}
                    />
                  </div>
                </div>

                {/* Year Select (Disabled until Model is selected) */}
                <div className="relative flex-1">
                  <select
                    disabled={!carModel}
                    className={`w-full border-2 rounded-md p-3 outline-none appearance-none cursor-pointer ${
                      carModel
                        ? "border-Brand bg-white"
                        : " bg-[#E3E3E3] cursor-not-allowed"
                    }`}
                  >
                    <option value="">Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                    <BiSolidDownArrow
                      className={`${
                        carModel
                          ? "text-Brand"
                          : "text-gray-500 cursor-not-allowed"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
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
