import React from "react";
import DashboardSideNav from "../../UI/DashboardSideNav";
import Container from "../../UI/Container";
import { Breadcrumb } from "../../UI/Breadcrumb";
import Wifi from "../../assets/wifi.png";
import Chip from "../../assets/chip.png";
import MasterCart from "../../assets/MasterCart.svg";
import Visa from "../../assets/visa.svg";
import { FiCreditCard } from "react-icons/fi";

const SavedCards = () => {
  return (
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "My account" }]}
        />
        <h2 className="text-2xl font-bold">My account</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
        <div className="flex md:justify-start">
          <DashboardSideNav />
        </div>
        <div className="space-y-6">
          {/* Cards display section */}
          <div className="flex md:flex-col items-center gap-6 ">
            {/* Left */}
            <div>
              <div className="space-y-4 mb-8 w-[350px] sm:w-full">
                {/* Mastercard */}
                <div className="bg-slate-800 rounded-xl p-4 text-white shadow-lg relative overflow-hidden w-full">
                  {/* Card chip icon */}
                  <div className="flex justify-between gap-4 items-start mb-6">
                    <img src={Chip} alt="Card Chip" className="w-auto h-6" />
                    <img src={Wifi} alt="Card Chip" className="w-auto h-6 " />
                  </div>

                  {/* Card number */}
                  <div className="tracking-wider mb-6">
                    <span className="mr-2">4562</span>
                    <span className="mr-2">1122</span>
                    <span className="mr-2">4595</span>
                    <span>7852</span>
                  </div>

                  {/* Card holder */}
                  <div className="text-sm text-gray-300 mb-4">Aimal N</div>

                  {/* Expiry and CVV */}
                  <div className="flex items-start gap-8 text-sm">
                    <div className="mr-4">
                      <div className="text-gray-400 mb-1">Expiry Date</div>
                      <div>24/2000</div>
                    </div>

                    <div>
                      <div className="text-gray-400 mb-1">CVV</div>
                      <div>6986</div>
                    </div>

                    {/* Mastercard logo */}
                    <div className="ml-auto self-end">
                      <img src={MasterCart} className="h-12 w-16" />
                    </div>
                  </div>
                </div>

                {/* Form section */}
                <div className="space-y-6">
                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-sm text-[#A2A2A7] mb-2">
                      Cardholder Name
                    </label>
                    <div className="flex items-center border-b border-gray-300 p-2">
                      <div className="mr-2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Aimal Naseem</span>
                    </div>
                  </div>

                  {/* Expiry Date and CVV */}
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-sm text-[#A2A2A7] mb-2">
                        Expiry Date
                      </label>
                      <div className="border-b border-gray-300 p-2">
                        09/06/2024
                      </div>
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm text-[#A2A2A7] mb-2">
                        4-digit CVV
                      </label>
                      <div className="border-b border-gray-300 p-2">••••</div>
                    </div>
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-sm text-[#A2A2A7] mb-2">
                      Card Number
                    </label>
                    <div className="flex items-center border-b border-gray-300 p-2 justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 text-gray-400">
                          <FiCreditCard className="h-5 w-5" />
                        </div>
                        <span>•••• •••• •••• •852</span>
                      </div>
                      <div className="flex">
                        <div className="h-4 w-4 bg-red-500 rounded-full opacity-90"></div>
                        <div className="h-4 w-4 bg-yellow-500 rounded-full opacity-90 -ml-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div>
              {" "}
              <div className="space-y-4 mb-8 w-[350px] sm:w-full">
                {/* Mastercard */}
                <div className="bg-slate-800 rounded-xl p-4 text-white shadow-lg relative overflow-hidden w-full">
                  {/* Card chip icon */}
                  <div className="flex justify-between gap-4 items-start mb-6">
                    <img src={Chip} alt="Card Chip" className="w-auto h-6" />
                    <img src={Wifi} alt="Card Chip" className="w-auto h-6 " />
                  </div>

                  {/* Card number */}
                  <div className="tracking-wider mb-6">
                    <span className="mr-2">4562</span>
                    <span className="mr-2">1122</span>
                    <span className="mr-2">4595</span>
                    <span>7852</span>
                  </div>

                  {/* Card holder */}
                  <div className="text-sm text-gray-300 mb-4">Aimal N</div>

                  {/* Expiry and CVV */}
                  <div className="flex items-start gap-8 text-sm">
                    <div className="mr-4">
                      <div className="text-gray-400 mb-1">Expiry Date</div>
                      <div>24/2000</div>
                    </div>

                    <div>
                      <div className="text-gray-400 mb-1">CVV</div>
                      <div>6986</div>
                    </div>

                    {/* Visa logo */}
                    <div className="ml-auto self-end">
                      <span className="h-8 w-10 text-white">
                        <img src={Visa} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form section */}
                <div className="space-y-6">
                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-sm text-[#A2A2A7] mb-2">
                      Cardholder Name
                    </label>
                    <div className="flex items-center border-b border-gray-300 p-2">
                      <div className="mr-2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Aimal Naseem</span>
                    </div>
                  </div>

                  {/* Expiry Date and CVV */}
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-sm text-[#A2A2A7] mb-2">
                        Expiry Date
                      </label>
                      <div className="border-b border-gray-300 p-2">
                        09/06/2024
                      </div>
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm text-[#A2A2A7] mb-2">
                        4-digit CVV
                      </label>
                      <div className="border-b border-gray-300 p-2">••••</div>
                    </div>
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-sm text-[#A2A2A7] mb-2">
                      Card Number
                    </label>
                    <div className="flex items-center border-b border-gray-300 p-2 justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 text-gray-400">
                          <FiCreditCard className="h-5 w-5" />
                        </div>
                        <span>•••• •••• •••• •852</span>
                      </div>
                      <div className="ml-auto self-end">
                        <span className="h-8 w-10 text-white">
                          <img src={Visa} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SavedCards;
