import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import Container from "../../UI/Container";
import { Breadcrumb } from "../../UI/Breadcrumb";
import DashboardSideNav from "../../UI/DashboardSideNav";

const MyGarage = () => {
  const [garages, setGarages] = useState([
    { make: "", model: "", year: "", vin: "", mileage: "" },
  ]);

  // Function to add a new garage
  const addGarage = () => {
    setGarages([
      ...garages,
      { make: "", model: "", year: "", vin: "", mileage: "" },
    ]);
  };

  // Function to handle input change
  const handleInputChange = (index, field, value) => {
    const updatedGarages = [...garages];
    updatedGarages[index][field] = value;
    setGarages(updatedGarages);
  };

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
          <div
            className="flex items-center text-Brand font-semibold text-xl cursor-pointer"
            onClick={addGarage}
          >
            <CiCirclePlus className="size-8 mr-2" />
            Add more
          </div>

          {/* Render Garage Forms */}
          {garages.map((garage, index) => (
            <div key={index} className="space-y-4 border-b pb-4 mb-4">
              {/* Make Dropdown */}
              <div className="relative">
                <select
                  className="block text-gray-400 appearance-none w-full bg-white border border-[#D0D5DD] rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none"
                  value={garage.make}
                  onChange={(e) =>
                    handleInputChange(index, "make", e.target.value)
                  }
                >
                  <option value="">Make</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Mazda">Mazda</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                  <FaChevronDown className="h-3 w-3" />
                </div>
              </div>

              {/* Model Dropdown */}
              <div className="relative">
                <select
                  className="block text-gray-400 appearance-none w-full bg-white border border-[#D0D5DD] rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none"
                  value={garage.model}
                  onChange={(e) =>
                    handleInputChange(index, "model", e.target.value)
                  }
                >
                  <option value="">Model</option>
                  <option value="Corolla">Corolla</option>
                  <option value="Altima">Altima</option>
                  <option value="CX-5">CX-5</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                  <FaChevronDown className="h-3 w-3" />
                </div>
              </div>

              {/* Year Dropdown */}
              <div className="relative">
                <select
                  className="block text-gray-400 appearance-none w-full bg-white border border-[#D0D5DD] rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none"
                  value={garage.year}
                  onChange={(e) =>
                    handleInputChange(index, "year", e.target.value)
                  }
                >
                  <option value="">Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
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
                  value={garage.vin}
                  onChange={(e) =>
                    handleInputChange(index, "vin", e.target.value)
                  }
                />
              </div>

              {/* Mileage Input */}
              <div>
                <input
                  type="text"
                  placeholder="Current Mileage"
                  className="w-full border border-[#D0D5DD] rounded-md py-3 px-4 focus:outline-none"
                  value={garage.mileage}
                  onChange={(e) =>
                    handleInputChange(index, "mileage", e.target.value)
                  }
                />
              </div>
            </div>
          ))}

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
