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
    <div className="relative">
      <Container>
        <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "Shop" }]} />
        <Section1 />
        <Section2 />
      </Container>
      {/* Contact Us */}
      <div>
        <BiMessageAltDetail className="absolute z-50 right-8 md:right-4 top-[94%] md:top-[96%]  bg-Brand rounded-full p-2 text-white text-xl w-10 h-10 object-cover" />
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
  const [modelOptions, setModelOptions] = useState([]);

  const handleCarMakeChange = (e) => {
    const selectedMake = e.target.value;
    setCarMake(selectedMake);

    // فقط للتجربة - هنا هتجيب الموديلات بناءً على الماركة اللي المستخدم اختارها
    if (selectedMake === "Toyota") {
      setModelOptions(["Corolla", "Camry", "RAV4"]);
    } else {
      setModelOptions([]);
    }
  };
  return (
    <div className="flex md:flex-col justify-between mt-10">
      {/* Left Side */}
      <div>
        <form className="space-y-4 text-sm">
          {/* What do you need */}
          <input
            type="text"
            placeholder="What Do You Need"
            className="w-full text-sm border border-gray-500 rounded-md py-3 px-2 "
          />

          {/* Car Info: Make, Model, Year */}
          <div className="flex flex-wrap gap-4 w-full">
            <div className="relative flex-1 ">
              <select
                value={carMake}
                onChange={handleCarMakeChange}
                className="w-full border border-gray-300 rounded-md py-3 px-2 outline-none appearance-none"
              >
                <option value="">Car Make</option>
                <option value="Toyota">Toyota</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                <BiSolidDownArrow className="size-3 text-Brand" />
              </div>
            </div>
            <div className="relative flex-1">
              <select
                className={`w-full border border-gray-300 rounded-md py-3 px-2 outline-none appearance-none ${
                  carMake ? "" : "bg-[#E3E3E3] cursor-not-allowed"
                }`}
                disabled={!carMake}
              >
                <option value="">Model</option>
                <option value="Corolla">Corolla</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                <BiSolidDownArrow className="size-3 text-Brand" />
              </div>
            </div>
            <div className="relative flex-1 ">
              <select
                className={`w-full border border-gray-300 rounded-md py-3 px-2 outline-none appearance-none ${
                  carMake && modelOptions.length
                    ? ""
                    : "bg-[#E3E3E3] cursor-not-allowed"
                }`}
                disabled={!carMake || !modelOptions.length}
              >
                <option value="">Year</option>
                <option value="2023">2023</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                <BiSolidDownArrow className="size-3 text-Brand" />
              </div>
            </div>
          </div>

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
            <button
              type="button"
              className="w-[35%] border border-gray-500 rounded-md px-2 py-3 lg:py-0"
            >
              Upload car license
            </button>
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
              className="w-[13%] border border-gray-500 rounded-md  py-3 px-1 outline-none"
            />

            <button
              type="button"
              className="w-[35%] border border-gray-500 rounded-md px-2 outline-none"
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
      <div>
        <img src={Steps} />
      </div>
    </div>
  );
};
