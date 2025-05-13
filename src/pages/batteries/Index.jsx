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
import Volum from "../../assets/volum.png";
import Tyers from "../../assets/Tyers.svg";
import Nissan from "../../assets/nissan.svg";
import HONDA from "../../assets/HONDA.svg";
import ContactUs from "../../assets/contact-us.svg";
import { SelectingSteps } from "../../components/ProductSelectingSteps";
import { FiltersAndProducts } from "../../components/FiltersAndProducts";
import { BiMessageAltDetail, BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";

export default function AutoParts() {
  const BatteriesProducts = [
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

  const BatteriesFilters = [
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
      <div className="lg:hidden absolute top-[15%] left-[12%] z-50 bg-white px-4 font-semibold shadow-md rounded-3xl">
        <SelectingSteps
          steps={[
            { img: Step1, title: "SELECT YOUR TYRES" },
            { img: Step2, title: "SELECT INSTALLER" },
            { img: Step3, title: "ORDER & PAY ONLINE" },
            { img: Step4, title: "WE INSTALL YOUR TYRES" },
          ]}
        />
      </div>
      <Container>
        <Section2 />
        <FiltersAndProducts
          products={BatteriesProducts}
          filters={BatteriesFilters}
        />
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
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");

  // Function to handle make change
  const handleCarMakeChange = (e) => {
    const selectedMake = e.target.value;
    setCarMake(selectedMake);
    setCarModel(""); // Reset model when make changes
    setCarYear(""); // Reset year when make changes
  };
  // Function to handle model change
  const handleCarModelChange = (e) => {
    setCarModel(e.target.value);
  };

  // Function to handle year change
  const handleCarYearChange = (e) => {
    setCarYear(e.target.value);
  };
  return (
    <div className="relative bg-[#FBFBFB]  flex items-center justify-center overflow-hidden">
      {/* Right Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute right-0 top-0 h-full object-cover"
      />

      {/* Modal in Center */}

      <div className="z-10 bg-[#FFFFFF] py-10 px-20 rounded-[40px] shadow-md  w-[50%] md:w-[80%] my-28">
        <div>
          <h3 className="text-sm font-semibold text-Brand mb-4">
            Search by Car
          </h3>
          {/* Car Info: Make, Model, Year */}
          <form className="space-y-4 text-sm">
            <div className="flex lg:flex-col gap-2">
              {/* Car Make */}
              <div className="relative flex-1">
                <select
                  value={carMake}
                  onChange={handleCarMakeChange}
                  className="w-full border rounded-md py-3 px-2 focus:border-Brand appearance-none outline-none"
                >
                  <option value="">Car Make</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Mazda">Mazda</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 lg:right-0 flex items-center px-2 text-gray-700">
                  <BiSolidDownArrow className="size-3 text-Brand" />
                </div>
              </div>

              {/* Car Model */}
              <div className="relative flex-1">
                <select
                  value={carModel}
                  onChange={handleCarModelChange}
                  disabled={!carMake}
                  className={`w-full border rounded-md py-3 px-2 focus:border-Brand appearance-none outline-none ${
                    carMake ? "" : "bg-[#E3E3E3] cursor-not-allowed"
                  }`}
                >
                  <option value="">Model</option>
                  {carMake === "Toyota" && (
                    <option value="Corolla">Corolla</option>
                  )}
                  {carMake === "Nissan" && (
                    <option value="Altima">Altima</option>
                  )}
                  {carMake === "Mazda" && <option value="CX-5">CX-5</option>}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 lg:right-0 flex items-center px-2 text-gray-700">
                  <BiSolidDownArrow
                    className={`size-3 ${
                      carMake ? "text-Brand" : "text-gray-500"
                    }`}
                  />
                </div>
              </div>

              {/* Car Year */}
              <div className="relative flex-1">
                <select
                  value={carYear}
                  onChange={handleCarYearChange}
                  disabled={!carModel}
                  className={`w-full border rounded-md py-3 px-2 focus:border-Brand appearance-none outline-none ${
                    carModel ? "" : "bg-[#E3E3E3] cursor-not-allowed"
                  }`}
                >
                  <option value="">Year</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 lg:right-0 flex items-center px-2 text-gray-700">
                  <BiSolidDownArrow
                    className={`size-3 ${
                      carMake ? "text-Brand" : "text-gray-500"
                    }`}
                  />
                </div>
              </div>
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
    <div className="mt-36 lg:mt-8">
      <div className="hidden lg:block  px-4 font-semibold rounded-3xl">
        <SelectingSteps
          steps={[
            { img: Step1, title: "SELECT YOUR TYRES" },
            { img: Step2, title: "SELECT INSTALLER" },
            { img: Step3, title: "ORDER & PAY ONLINE" },
            { img: Step4, title: "WE INSTALL YOUR TYRES" },
          ]}
        />
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
