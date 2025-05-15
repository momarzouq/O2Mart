import React, { useState } from "react";
import Container from "../UI/Container";
import AutoParts from "../assets/shopage.png";
import Steps from "../assets/steps.svg";
import { BsExclamationCircle } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { Breadcrumb } from "../UI/Breadcrumb";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Shop() {
  return (
    <div className="mb-8">
      <Container>
        <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "Shop" }]} />
        <Section1 />
        <Section2 />
      </Container>
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 mt-4">
        <h3 className="text-2xl font-bold">All Your Auto Needs in one place</h3>
        <p className="text-[#5F5D5D]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img src={AutoParts} alt="Auto parts" />

        <div className="flex justify-center gap-[220px] lg:gap-28 w-full max-w-[1000px] mt-4 text-lg font-semibold">
          <h3>Auto Parts</h3>
          <h3>Batteries</h3>
          <h3>Tyers</h3>
          <h3>Rims</h3>
        </div>
      </div>
      <div className="flex flex-col text-start mx-auto gap-3 mt-16">
        <h3 className="text-2xl font-medium">Not Sure How to Decide?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the .Lorem Ipsum has been the rinting and typesetting
          industry
        </p>
      </div>
    </div>
  );
};

const Section2 = () => {
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
    <div className="flex lg:flex-col lg:ml-0 items-center lg:mt-8">
      {/* Left Side */}
      <div className="flex-[5]">
        <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="What Do You Need"
              className="w-full border border-gray-500 rounded-md p-2"
            />
          </div>

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
                {carMake === "Nissan" && <option value="Altima">Altima</option>}
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

            <div className="w-[12%] flex items-center justify-center mx-2 gap-4 md:gap-1 text-Brand font-semibold">
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
            <div key={index} className="flex gap-4">
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
              className="w-full border border-gray-500 rounded-md p-2"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/2 text-start px-2 bg-Brand text-white py-2 md:py-0 md:text-xs rounded-md font-semibold"
          >
            Get Me The Best Offer
          </button>
        </form>
      </div>
      {/* Right Side */}
      <div className="flex-[7] md:mt-4 lg:mb-8">
        <img src={Steps} alt="Steps" className="h-[500px]" />
      </div>
    </div>
  );
};
