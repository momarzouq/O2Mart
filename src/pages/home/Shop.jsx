import React from "react";
import Container from "../../UI/Container";
import AutoParts from "../../assets/shopage.png";
import Steps from "../../assets/steps.svg";
import { BsExclamationCircle } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { Breadcrumb } from "../../UI/Breadcrumb";
export default function Shop() {
  return (
    <div>
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
          <div className="flex gap-2">
            <select className="flex-1 border border-gray-500 rounded-md p-2">
              <option>Car Make</option>
            </select>
            <select className="flex-1 border border-gray-500 rounded-md p-2 bg-[#E3E3E3]">
              <option>Model</option>
            </select>
            <select className="flex-1 border border-gray-500 rounded-md p-2 bg-[#E3E3E3]">
              <option>Year</option>
            </select>
          </div>

          {/* VIN / License Upload */}
          <div className="flex gap-[18px] items-center">
            <input
              type="text"
              placeholder="Enter VIN/ Chassis Number"
              className="flex border border-gray-500 rounded-md py-2 px-1"
            />
            <span className="flex items-center gap-1 text-md text-Brand">
              <BsExclamationCircle />
              OR
            </span>
            <button
              type="button"
              className=" border border-gray-500 rounded-md px-1.5 py-2"
            >
              Upload car license
            </button>
          </div>

          {/* Required Part / Quantity / Upload Photo */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Required Part"
              className=" border border-gray-500 rounded-md py-2 px-1"
            />

            <input
              type="number"
              placeholder="QTY"
              className="max-w-14 border border-gray-500 rounded-md  py-2 px-1"
            />

            <button
              type="button"
              className="border border-gray-500 rounded-md px-2"
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
              className="flex-1 border border-gray-500 rounded-md p-2"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 border border-gray-500 rounded-md p-2"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-500 rounded-md p-2"
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
