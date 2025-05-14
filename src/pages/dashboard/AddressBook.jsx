import React, { useState } from "react";
import DashboardSideNav from "../../UI/DashboardSideNav";
import Container from "../../UI/Container";
import { Breadcrumb } from "../../UI/Breadcrumb";
import { IoClose } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";

const AddressBook = () => {
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "WORK",
      recipient: "TT",
      street: "amovmab",
      number: "23",
      city: "Dubai",
      region: "Dubai",
      isPrimary: true,
    },
    {
      id: 2,
      name: "GARAGE",
      recipient: "H H",
      street: "H",
      number: "H",
      city: "H",
      region: "H",
      isPrimary: false,
    },
    {
      id: 3,
      name: "Home",
      recipient: "H H",
      street: "H",
      number: "H",
      city: "H",
      region: "H",
      isPrimary: false,
    },
  ]);

  const makePrimary = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isPrimary: addr.id === id,
      }))
    );
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };
  return (
    <Container className="space-y-12 py-8">
      <AddNewAddress
        addNewAddress={addNewAddress}
        setAddNewAddress={setAddNewAddress}
      />
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Address Book" }]}
        />
        <h2 className="text-2xl font-bold">My Addresses</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
        <div className="flex md:justify-start">
          <DashboardSideNav />
        </div>

        <div className="w-full">
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">
              The following addresses will be used on the checkout page by
              default.
            </h3>
            <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
            {addresses
              .filter((a) => a.isPrimary)
              .map((addr) => (
                <div key={addr.id}>
                  <button className="mb-2 text-sm font-semibold bg-[#DCDBDB] text-Brand py-1.5 px-6 rounded-lg">
                    Edit
                  </button>
                  <p>{addr.name}</p>
                  <p>{addr.recipient}</p>
                  <p>{addr.street}</p>
                  <p>{addr.number}</p>
                  <p>{addr.city}</p>
                  <p>{addr.region}</p>
                </div>
              ))}
          </div>

          <div className="flex md:flex-col md:justify-start justify-between items-center md:items-start mb-4 border-b pb-6">
            <h3 className="text-lg font-bold">Shipping Address Book</h3>
            <button
              onClick={() => setAddNewAddress(true)}
              className="bg-Brand text-white px-4 py-1.5 rounded-lg "
            >
              Add New Shipping Address
            </button>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">
              The following addresses are available during the checkout process.
            </h4>

            {addresses
              .filter((a) => !a.isPrimary)
              .map((addr) => (
                <div
                  key={addr.id}
                  className="flex justify-between p-4 rounded mb-4"
                >
                  <div>
                    <h4 className="font-semibold">{addr.name}</h4>
                    <p>{addr.recipient}</p>
                    <p>{addr.street}</p>
                    <p>{addr.city}</p>
                    <p>{addr.region}</p>
                    <p>{addr.region}</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <button className="bg-[#DCDBDB] text-gray-800 text-sm rounded-lg py-1.5 px-2 hover:shadow">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteAddress(addr.id)}
                      className="bg-[#DCDBDB] text-gray-800 text-sm rounded-lg py-1.5 px-2 hover:shadow"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => makePrimary(addr.id)}
                      className="bg-[#DCDBDB] text-gray-800 text-sm rounded-lg py-1.5 px-2 hover:shadow"
                    >
                      Make primary
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddressBook;

const AddNewAddress = ({ addNewAddress, setAddNewAddress }) => {
  return (
    <>
      {addNewAddress && (
        <form>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative z-10 bg-white px-10 md:px-6 py-6 rounded-lg shadow-md w-[70%] md:w-[90%] h-fit my-12 overflow-y-auto">
              <button
                onClick={() => setAddNewAddress(false)}
                className="absolute top-4 right-6 z-50 text-gray-600 hover:text-Brand text-xl"
                aria-label="Close"
              >
                <IoClose size={20} />
              </button>
              {/* Address And Country And City */}
              <div className="flex gap-4 lg:gap-1 items-center w-full md:text-sm ">
                <div className="w-[52%] lg:w-1/3 flex flex-col">
                  <label className=" font-medium mb-1">Address</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md col-span-2 outline-none" />
                </div>
                <div className="w-[20%] lg:w-1/3 flex flex-col">
                  <label className=" font-medium mb-1">Country</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md outline-none" />
                </div>
                <div className="relative w-[30%] lg:w-1/3 flex flex-col">
                  <label className="font-medium mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <select className="bg-[#DCDBDB80] p-2 rounded-md appearance-none">
                    <option value="" disabled selected>
                      Select your city
                    </option>
                    <option value="dubai">Dubai</option>
                    <option value="abu-dhabi">Abu Dhabi</option>
                    <option value="sharjah">Sharjah</option>
                    <option value="ajman">Ajman</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 top-7 flex items-center px-2 text-gray-500">
                    <BiSolidDownArrow className="size-3" />
                  </div>
                </div>
              </div>
              {/* Address And Country And City */}
              <div className="flex gap-4 md:gap-1 w-full md:text-sm mt-2">
                <div className="w-[48.3%] lg:w-1/2 flex flex-col">
                  <label className=" font-medium mb-1">Area</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md outline-none" />
                </div>
                <div className="w-[50%] lg:w-1/2 flex flex-col">
                  <label className=" font-medium mb-1">Address</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md col-span-2 outline-none" />
                </div>
              </div>
              {/* Additional Instructions */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">
                  Additional Instructions
                </label>
                <input className="bg-[#DCDBDB80] p-2 rounded-md col-span-2 outline-none" />
              </div>
            </div>
          </div>
          <button className="w-1/3 py-1 px-8 rounded-md bg-Brand text-white">
            Add Address
          </button>
        </form>
      )}
    </>
  );
};
