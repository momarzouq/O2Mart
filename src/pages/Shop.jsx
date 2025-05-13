import React, { useState } from "react";
import Container from "../UI/Container";
import AutoParts from "../assets/shopage.png";
import Steps from "../assets/steps.svg";
import { BsExclamationCircle } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { Breadcrumb } from "../UI/Breadcrumb";
import { BiMessageAltDetail, BiSolidDownArrow } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";
export default function Shop() {
  return (
    <div className="relative mb-28">
      <Container>
        <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "Shop" }]} />
        <Section1 />
        <Section2 />
      </Container>
      {/* Contact Us */}
      <div>
        <BiMessageAltDetail className="absolute z-50 right-8 md:right-4 top-[100%]  bg-Brand rounded-full p-2 text-white text-xl w-10 h-10 object-cover" />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 mt-4">
        <h3 className="text-2xl font-bold">All Your Auto Needs in one place</h3>
        <p className="w-[60%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img src={AutoParts} />

        {/* Make sure this div spans full width and spaces the items */}
        <div className="flex justify-center gap-[220px] w-full max-w-[1000px] mt-4 text-lg font-semibold">
          <h3>Auto Parts</h3>
          <h3>Batteries</h3>
          <h3>Tyers</h3>
          <h3>Rims</h3>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-16">
        <h3 className="text-2xl">Not Sure How to Decide?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>
    </div>
  );
};

const Section2 = () => {
  const [carMake, setCarMake] = useState("");
  const [uploadedLincese, setUploadedLincese] = useState(false);
  const [uploadedPart, setUploadedPart] = useState(false);

  const handleCarMakeChange = (e) => {
    const selectedMake = e.target.value;
    setCarMake(selectedMake);
  };

  const handleLinceseUpload = (event) => {
    if (event.target.files.length > 0) {
      setUploadedLincese(true);
    }
  };

  const handlePartUpload = (event) => {
    if (event.target.files.length > 0) {
      setUploadedPart(true);
    }
  };

  return (
    <div className="flex md:flex-col justify-between mt-10">
      {/* Left Side */}
      <div>
        <form className="space-y-4 text-sm">
          <input
            type="text"
            placeholder="What Do You Need"
            className="w-full text-sm border border-gray-500 rounded-md py-3 px-2 "
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
                onChange={handleLinceseUpload}
              />
              <label htmlFor="uploadLicense" className="cursor-pointer">
                {uploadedLincese ? "Photo Uploaded" : "Upload Car License"}
              </label>
            </div>
          </div>

          {/* Required Part / Quantity / Upload Photo */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Required Part"
              className="w-[50%] border border-gray-500 rounded-md py-3 px-1 outline-none"
            />

            <input
              type="number"
              placeholder="QTY"
              className="w-[13%] border border-gray-500 rounded-md py-3 px-1 outline-none"
            />

            <div className="w-[40%] md:w-[45%] text-xs border border-gray-500 rounded-md px-2 flex items-center">
              <input
                type="file"
                id="uploadPart"
                className="hidden"
                onChange={handlePartUpload}
              />
              <label htmlFor="uploadPart" className="cursor-pointer">
                {uploadedPart ? "Photo Uploaded" : "Upload Part Photo"}
              </label>
            </div>
          </div>

          {/* Add Another Part */}
          <button type="button" className="flex items-center text-Brand">
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
      <div className="md:mt-4">
        <img src={Steps} alt="Steps" />
      </div>
    </div>
  );
};