import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import Container from "../../UI/Container";
import { Breadcrumb } from "../../UI/Breadcrumb";
import DashboardSideNav from "../../UI/DashboardSideNav";

const MyGarage = () => {
  return (
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "My Garage" }]}
        />
        <h2 className="text-2xl font-bold">My Garage</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
      <div className="flex md:justify-start">
          <DashboardSideNav />
        </div>
        <div className="space-y-4 w-full max-w-2xl">
          {/* Add more header */}
          <div className="flex items-center text-Brand font-semibold text-xl cursor-pointer">
            <CiCirclePlus className="size-8 mr-2" />
            Add more
          </div>

          {/* Make Dropdown */}
          <div className="relative">
            <select className="block text-gray-400 appearance-none w-full bg-white border border-[#D0D5DD] rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none">
              <option value="">Make</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-3 w-3" />
            </div>
          </div>

          {/* Model Dropdown */}
          <div className="relative">
            <select className="block text-gray-400 appearance-none w-full bg-white border border-[#D0D5DD] rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none">
              <option value="">Model</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
              <FaChevronDown className="h-3 w-3" />
            </div>
          </div>

          {/* Year Dropdown */}
          <div className="relative">
            <select className="block text-gray-400 appearance-none w-full bg-white border border-[#D0D5DD] rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none">
              <option value="">Year</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-3 w-3" />
            </div>
          </div>

          {/* VIN Input */}
          <div>
            <input
              type="text"
              placeholder="VIN or Chassis Number"
              className="w-full border border-[#D0D5DD] rounded-md py-3 px-4 focus:outline-none"
            />
          </div>

          {/* Mileage Input */}
          <div>
            <input
              type="text"
              placeholder="Current Mileage"
              className="w-full border border-[#D0D5DD] rounded-md py-3 px-4 focus:outline-none"
            />
          </div>

          {/* Add Vehicle Button */}
          <div>
            <button
              type="button"
              className="w-full bg-Brand text-white font-medium py-3 px-4 rounded-md"
            >
              Add vehicle
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyGarage;
