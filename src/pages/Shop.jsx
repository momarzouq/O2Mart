import React, { useState } from "react";
import Container from "../UI/Container";
import AutoParts from "../assets/shopage.png";
import Steps from "../assets/steps.svg";
import { BsExclamationCircle } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { Breadcrumb } from "../UI/Breadcrumb";

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
      <div className="flex flex-col gap-3 mt-16">
        <h3 className="text-2xl font-medium">Not Sure How to Decide?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>
    </div>
  );
};

const Section2 = () => {
  const [carMake, setCarMake] = useState("");
  const [uploadedLicenses, setUploadedLicenses] = useState([false]);
  const [uploadedParts, setUploadedParts] = useState([false]);
  const [parts, setParts] = useState([{ part: "", qty: "", photo: false }]);

  const handleCarMakeChange = (e) => {
    const selectedMake = e.target.value;
    setCarMake(selectedMake);
  };

  const handleLicenseUpload = (event, index) => {
    const newUploadedLicenses = [...uploadedLicenses];
    newUploadedLicenses[index] = event.target.files.length > 0;
    setUploadedLicenses(newUploadedLicenses);
  };

  const handlePartUpload = (event, index) => {
    const newUploadedParts = [...uploadedParts];
    newUploadedParts[index] = event.target.files.length > 0;
    setUploadedParts(newUploadedParts);
    
    const newParts = [...parts];
    newParts[index].photo = event.target.files.length > 0;
    setParts(newParts);
  };

  const handlePartChange = (index, field, value) => {
    const newParts = [...parts];
    newParts[index][field] = value;
    setParts(newParts);
  };

  const addAnotherPart = () => {
    setParts([...parts, { part: "", qty: "", photo: false }]);
    setUploadedLicenses([...uploadedLicenses, false]);
    setUploadedParts([...uploadedParts, false]);
  };

  const removePart = (index) => {
    if (parts.length <= 1) return;
    
    const newParts = [...parts];
    newParts.splice(index, 1);
    setParts(newParts);
    
    const newUploadedLicenses = [...uploadedLicenses];
    newUploadedLicenses.splice(index, 1);
    setUploadedLicenses(newUploadedLicenses);
    
    const newUploadedParts = [...uploadedParts];
    newUploadedParts.splice(index, 1);
    setUploadedParts(newUploadedParts);
  };

  return (
    <div className="flex lg:flex-col ml-14 lg:ml-0 items-center mt-4 lg:mt-8">
      {/* Left Side */}
      <div className="flex-[5]">
        <form className="space-y-4 text-sm">
          <input
            type="text"
            placeholder="What Do You Need"
            className="w-full text-sm border border-gray-500 rounded-md py-3 px-2"
          />

          {/* VIN / License Upload */}
          <div className="flex gap-[18px] items-center">
            <input
              type="text"
              placeholder="Enter VIN/ Chassis Number"
              className="w-[50%] border border-gray-500 rounded-md py-3 px-1 outline-none"
            />
            <span className="w-[9%] flex items-center gap-1 text-md text-Brand">
              <BsExclamationCircle />
              OR
            </span>
            <div className="w-[40%] md:w-[45%] text-xs border py-[14px] border-gray-500 rounded-md px-2 flex items-center">
              <input
                type="file"
                id="uploadLicense"
                className="hidden"
                onChange={(e) => handleLicenseUpload(e, 0)}
              />
              <label htmlFor="uploadLicense" className="cursor-pointer">
                {uploadedLicenses[0] ? "Photo Uploaded" : "Upload Car License"}
              </label>
            </div>
          </div>

          {/* Parts List */}
          {parts.map((part, index) => (
            <div key={index} className="space-y-2">
              {/* Required Part / Quantity / Upload Photo */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Required Part"
                  className="w-[50%] border border-gray-500 rounded-md py-3 px-1 outline-none"
                  value={part.part}
                  onChange={(e) => handlePartChange(index, "part", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="QTY"
                  className="w-[13%] border border-gray-500 rounded-md py-3 px-1 outline-none"
                  value={part.qty}
                  onChange={(e) => handlePartChange(index, "qty", e.target.value)}
                />

                <div className="w-[40%] md:w-[45%] text-xs border border-gray-500 rounded-md px-2 flex items-center">
                  <input
                    type="file"
                    id={`uploadPart-${index}`}
                    className="hidden"
                    onChange={(e) => handlePartUpload(e, index)}
                  />
                  <label htmlFor={`uploadPart-${index}`} className="cursor-pointer">
                    {uploadedParts[index] ? "Photo Uploaded" : "Upload Part Photo"}
                  </label>
                </div>
              </div>

              {/* Remove button for additional parts */}
              {index > 0 && (
                <button
                  type="button"
                  className="text-red-500 text-xs"
                  onClick={() => removePart(index)}
                >
                  Remove Part
                </button>
              )}
            </div>
          ))}

          {/* Add Another Part */}
          <button
            type="button"
            className="flex items-center text-Brand"
            onClick={addAnotherPart}
          >
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
              className="flex-1 w-1/2 border border-gray-500 rounded-md py-3 px-2 outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 w-1/2 border border-gray-500 rounded-md py-3 px-2 outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-500 rounded-md py-3 px-2 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/2 bg-Brand text-white py-4 rounded-md font-semibold"
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