import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import Container from "../../UI/Container";
import Background from "../../assets/hombg.png";
import { BsExclamationCircle } from "react-icons/bs";
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
import { SelectingSteps } from "../../components/ProductSelectingSteps";
import { FiltersAndProducts } from "../../components/FiltersAndProducts";
import { BiMessageAltDetail, BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function AutoParts() {
  const AutoPartsProducts = [
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
    </div>
  );
}

const Section1 = () => {
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");

  // Parts state management
  const [parts, setParts] = useState([
    { partName: "", quantity: "", partPhoto: null },
  ]);
  const [uploadedParts, setUploadedParts] = useState([false]);
  const [uploadedLincese, setUploadedLincese] = useState(false);

  // Car selection handlers
  const handleCarMakeChange = (e) => {
    const selectedMake = e.target.value;
    setCarMake(selectedMake);
    setCarModel("");
    setCarYear("");
  };

  const handleCarModelChange = (e) => {
    setCarModel(e.target.value);
  };

  const handleCarYearChange = (e) => {
    setCarYear(e.target.value);
  };

  // Parts management handlers
  const addAnotherPart = () => {
    setParts([...parts, { partName: "", quantity: "", partPhoto: null }]);
    setUploadedParts([...uploadedParts, false]);
  };

  const handlePartChange = (index, field, value) => {
    const updatedParts = [...parts];
    updatedParts[index][field] = value;
    setParts(updatedParts);
  };

  const handlePartUpload = (e, index) => {
    if (e.target.files.length > 0) {
      const updatedParts = [...parts];
      updatedParts[index].partPhoto = e.target.files[0];
      setParts(updatedParts);

      const updatedUploaded = [...uploadedParts];
      updatedUploaded[index] = true;
      setUploadedParts(updatedUploaded);
    }
  };

  const handleLinceseUpload = (event) => {
    if (event.target.files.length > 0) {
      setUploadedLincese(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data including all parts
    console.log({
      carMake,
      carModel,
      carYear,
      parts,
      // other form fields...
    });
  };

  return (
    <div className="relative bg-[#FBFBFB] flex items-center justify-center overflow-hidden">
      {/* Left Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute left-0 top-0 max-h-[550px] object-cover transform rotate-180"
      />

      {/* Right Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute right-0 top-0 max-h-[550px] object-cover"
      />

      {/* Modal in Center */}
      <div className="z-10 bg-white p-6 rounded-lg shadow-md w-[55%] md:w-[90%] my-12">
        <div>
          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            {/* Car Info: Make, Model, Year */}
            <div className="flex gap-2">
              {/* Car Make */}
              <div className="relative flex-1">
                <select
                  value={carMake}
                  onChange={handleCarMakeChange}
                  className="w-full border focus:border-Brand rounded-md py-3 px-2 outline-none appearance-none"
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
                  className={`w-full border focus:border-Brand rounded-md py-3 px-2 outline-none appearance-none ${
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
                  className={`w-full border focus:border-Brand rounded-md py-3 px-2 outline-none appearance-none ${
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

            {/* VIN / License Upload */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="VIN Number"
                className="w-1/2 border border-gray-500 rounded-md py-2 px-1"
              />

              <div className="w-[12%] flex items-center gap-4 md:gap-1 text-Brand font-semibold">
                <BsExclamationCircle size={18} /> OR
              </div>

              <div className="w-[40%] md:w-[45%]  text-xs border border-gray-500 rounded-md px-2 flex items-center">
                <input
                  type="file"
                  id="uploadLicense"
                  className="hidden"
                  onChange={handleLinceseUpload}
                />
                <label htmlFor="uploadLicense" className="cursor-pointer">
                  {uploadedLincese ? "Photo Uploaded" : "Upload Car License"}
                </label>
              </div>
            </div>

            {/* Parts List */}
            {parts.map((part, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Required Part"
                  value={part.partName}
                  onChange={(e) =>
                    handlePartChange(index, "partName", e.target.value)
                  }
                  className="w-1/2 border border-gray-500 rounded-md py-2 px-1"
                />

                <input
                  type="number"
                  placeholder="QTY"
                  value={part.quantity}
                  onChange={(e) =>
                    handlePartChange(index, "quantity", e.target.value)
                  }
                  className="w-[12%] max-w-14 border border-gray-500 rounded-md py-2 px-1"
                />

                <div className="w-[40%] md:w-[45%] text-xs border border-gray-500 rounded-md px-2 flex items-center">
                  <input
                    type="file"
                    id={`uploadPart-${index}`}
                    className="hidden"
                    onChange={(e) => handlePartUpload(e, index)}
                  />
                  <label
                    htmlFor={`uploadPart-${index}`}
                    className="cursor-pointer"
                  >
                    {uploadedParts[index]
                      ? "Photo Uploaded"
                      : "Upload Part Photo"}
                  </label>
                </div>
              </div>
            ))}

            {/* Add Another Part */}
            <button
              type="button"
              className="font-medium flex items-center text-Brand"
              onClick={addAnotherPart}
            >
              <span className="flex items-center text-Brand gap-1">
                <IoMdAddCircleOutline size={22} />
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
