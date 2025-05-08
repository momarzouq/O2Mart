import { useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { useLocationModalStore } from "../store/locationStore";
import { BsClock } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

export const LocationModal = ({ cartItems }) => {
  const { closeLocationModal } = useLocationModalStore();
  const [currentCase, setCurrentCase] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const datesPerPage = 9;
  const locations = [
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Al Dobowi - Hankook Masters",
      address: "M8 - Musaffah Industria - Abu Dhabi",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 6:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
  ];

  const dates = [
    { date: "Today 21 Mar", available: false },
    { date: "SAT 22 Mar", available: true },
    { date: "SUN 23 Mar", available: false },
    { date: "MON 24 Mar", available: true },
    { date: "TUS 23 Mar", available: true },
    { date: "WED 24 Mar", available: true },
    { date: "THU 23 Mar", available: true },
    { date: "SAT 24 Mar", available: true },
    { date: "SUN 24 Mar", available: false },
    { date: "SAT 24 Mar", available: true },
    { date: "SUN 24 Mar", available: false },
  ];
  const indexOfLastDate = currentPage * datesPerPage;
  const indexOfFirstDate = indexOfLastDate - datesPerPage;
  const currentDates = dates.slice(indexOfFirstDate, indexOfLastDate);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(dates.length / datesPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleBookNowClick = () => {
    if (currentCase < 3) {
      setCurrentCase(currentCase + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white w-[70%] md:w-[90%] p-10 md:p-6 rounded-xl">
        <button
          className="absolute right-6 top-4 text-Brand text-2xl"
          onClick={() => closeLocationModal()}
        >
          <SlClose />
        </button>

        {currentCase === 1 && (
          <>
            <h2 className="text-start text-2xl font-bold mb-2">
              {cartItems.deliveryOptions === "Installation Center"
                ? "Select Installation Center Service"
                : cartItems.deliveryOptions === "Delivery with Installation"
                ? "Select Mobile Van Service"
                : "Select Service"}
            </h2>
            <div className="flex md:flex-col gap-2 mb-6">
              <input
                className="flex-[5]  py-1.5 px-2 border rounded-md bg-[#DCDBDB80] outline-none"
                placeholder="Enter Location"
              />
              <button className="flex-[1] bg-Brand text-white rounded-md p-2">
                Search Location
              </button>
            </div>
            <div className="flex flex-wrap gap-6 overflow-y-scroll max-h-[500px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="relative border border-gray-400 rounded-lg  w-[460px] md:w-auto xl:w-full   p-4 md:pb-16 space-y-4"
                >
                  <div className="flex flex-col text-sm font-medium items-start space-y-2">
                    <h3 className="text-start font-semibold text-xl">
                      {location.name}
                    </h3>
                    <p className="flex items-center gap-2 text-gray-700">
                      <IoLocationOutline className="text-Brand size-6" />
                      {location.address}
                    </p>
                    {location.hours.map((hour, idx) => (
                      <p
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <BsClock className="ml-0.5 text-Brand size-5" />
                        {hour.day} : {hour.time}
                      </p>
                    ))}
                  </div>
                  <button
                    className="absolute right-4 md:left-4 bottom-4 rounded-lg bg-Brand py-1 px-6 text-white font-medium hover:bg-BrandDark transition-all"
                    onClick={handleBookNowClick}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {currentCase === 2 && (
          <>
            <div>
              <IoArrowForwardCircleOutline
                className="absolute top-[45%] right-6 text-Brand size-8 cursor-pointer"
                onClick={handleNextPage}
                disabled={
                  currentPage === Math.ceil(dates.length / datesPerPage)
                }
              />
              <IoArrowBackCircleOutline
                className="absolute top-[45%] left-6 text-Brand size-8 cursor-pointer"
                onClick={handlePrevPage}
              />
              <div className="absolute top-4  flex  items-center font-semibold gap-6 md:gap-2 md:text-sm md:max-w-60">
                <h3>Pick Installation Date</h3>
                <p className="text-Brand">Sand Dance - Al Qouz</p>
              </div>
              <Link
                className={`absolute font-medium right-4 bottom-4 rounded-md py-1 px-4 mt-4 ${
                  selectedDate
                    ? "bg-Brand text-white cursor-pointer"
                    : "bg-[#DCDBDB] text-[#969494] cursor-not-allowed"
                }`}
                disabled={!selectedDate}
                to="/checkout"
              >
                Proceed
              </Link>
              <div className="bg-[#DCDBDB80] rounded py-3 px-8 mt-10 mb-8">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  {currentDates.map((date, index) => (
                    <p
                      key={index}
                      className={`text-center shadow-lg hover:shadow-md py-2 px-6 rounded-md w-[88px] cursor-pointer ${
                        date.available
                          ? selectedDate === date.date
                            ? "bg-Brand text-white"
                            : "bg-white"
                          : "bg-[#DCDBDB] text-gray-500 cursor-not-allowed"
                      }`}
                      onClick={() =>
                        date.available && setSelectedDate(date.date)
                      }
                    >
                      {date.date}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
