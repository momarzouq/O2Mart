import { Link } from "react-router-dom";
import Container from "../UI/Container";
import Apple from "../assets/apple.svg";
import Google from "../assets/google.svg";
import Master from "../assets/mster.svg";
import Visa from "../assets/visa.svg";
import Van from "../assets/Van.svg";
import Delivery from "../assets/Delivery.svg";
import Installation from "../assets/Installation.svg";

import { HiOutlineExclamationCircle } from "react-icons/hi";
export default function Checkout() {
  return (
    <Container>
      <h2 className="text-xl font-bold my-4">Checkout</h2>
      <div className="flex xl:flex-col gap-4 lg:px-10 lg:py-8 mb-56">
        <div className="flex-[3] flex flex-col gap-4">
          {/* Customer Information */}
          <div className="border rounded-b-lg">
            <div className="flex bg-[#DCDBDB] justify-between items-center mb-4 p-3">
              <h2 className="text-lg font-bold">Customer Information</h2>
              <Link to="/signin" className="text-Brand font-semibold underline">
                Sign In
              </Link>
            </div>

            <div className="flex flex-col gap-4 p-4 w-full">
              {/* First And Last Name */}
              <div className="flex lg:flex-col gap-4 items-center w-full v">
                <div className="w-[10%] lg:w-full  flex flex-col ">
                  <label className=" font-medium mb-1">Title </label>
                  <select className="bg-[#DCDBDB80] pr-8 pl-1 py-2 rounded-md text-gray-400">
                    <option>MR</option>
                  </select>
                </div>
                <div className="w-[45%] lg:w-full flex flex-col">
                  <label className=" font-medium mb-1">First Name</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md" />
                </div>
                <div className="w-[45%] lg:w-full flex flex-col">
                  <label className=" font-medium mb-1">Last Name</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md" />
                </div>
              </div>
              {/* Email And Number */}
              <div className="flex gap-4 md:gap-1 w-full md:text-sm">
                <div className="w-[70%] lg:w-1/2 flex flex-col">
                  <label className=" font-medium mb-1">E-Mail</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md span-col-2" />
                </div>
                <div className="w-[29%] lg:w-1/2 flex flex-col">
                  <label className=" font-medium mb-1">Mobile Number</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md" />
                </div>
              </div>
              {/* Address And Country And City */}
              <div className="flex gap-4 lg:gap-1 w-full md:text-sm">
                <div className="w-[50%] lg:w-1/3 flex flex-col">
                  <label className=" font-medium mb-1">Address</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md col-span-2" />
                </div>
                <div className="w-[20%] lg:w-1/3 flex flex-col">
                  <label className=" font-medium mb-1">Country</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md" />
                </div>
                <div className="w-[30%] lg:w-1/3 flex flex-col">
                  <label className=" font-medium mb-1">City</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md" />
                </div>
              </div>
              {/* Address And Country And City */}
              <div className="flex gap-4 md:gap-1 w-full md:text-sm">
                <div className="w-[48.3%] lg:w-1/2 flex flex-col">
                  <label className=" font-medium mb-1">Area</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md" />
                </div>
                <div className="w-[50%] lg:w-1/2 flex flex-col">
                  <label className=" font-medium mb-1">Address</label>
                  <input className="bg-[#DCDBDB80] p-2 rounded-md col-span-2" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">
                  Additional Instructions
                </label>
                <input className="bg-[#DCDBDB80] p-2 rounded-md col-span-2" />
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className=" border rounded-lg">
            <div className="flex bg-[#DCDBDB] justify-between items-center mb-4 p-4">
              <h2 className="text-lg font-bold">Vehicle Details</h2>
              <Link to="/signin" className="text-Brand font-semibold underline">
                Sign In
              </Link>
            </div>

            <div className="flex gap-4 lg:gap-1 w-full pt-4 px-4">
              <div className="flex-1 lg:w-1/3 flex flex-col">
                <label className=" font-medium mb-1">Car Make</label>
                <input className="bg-[#DCDBDB80] p-2 rounded-md col-span-2" />
              </div>
              <div className="flex-1 lg:w-1/3 flex flex-col">
                <label className=" font-medium mb-1">Modal</label>
                <input className="bg-[#DCDBDB80] p-2 rounded-md" />
              </div>
              <div className="flex-1 lg:w-1/3 flex flex-col">
                <label className=" font-medium mb-1">Year</label>
                <input className="bg-[#DCDBDB80] p-2 rounded-md" />
              </div>
            </div>
            <div className="flex gap-4 lg:gap-1 w-full p-4 lg:text-xs">
              <div className="flex-1 w-1/2 flex flex-col">
                <label className=" font-medium mb-1 lg:mt-3">
                  Plate Number
                </label>
                <input className="bg-[#DCDBDB80] p-2 rounded-md" />
              </div>
              <div className="flex-1 w-1/2  flex flex-col">
                <span className="flex items-center gap-1 font-medium">
                  VIN/Chassis Number.
                  <HiOutlineExclamationCircle className="text-Brand size-4" />
                </span>
                <input className="bg-[#DCDBDB80] p-2 rounded-md" />
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="border rounded-b-lg">
            <h3 className="w-full text-lg font-semibold bg-[#DCDBDB] p-3">
              Payment Options
            </h3>
            <div className="rounded px-4 py-2">
              <div className="flex lg:flex-col items-center lg:items-start gap-28 lg:gap-4 mt-2 ">
                <span className="flex flex-col items-center gap-1">
                  <span className="flex items-center md:text-xs md:font-medium">
                    <input type="radio" name="payment" />
                    Credit/Debit Card <img src={Master} className="h-10 w-10" />
                    <img src={Visa} className="h-10 w-10" />
                  </span>
                  <span className="text-xs text-[#333232]">
                    secure Payment via Paymob Checkout
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="payment" />
                  <img src={Apple} className="h-10 w-10" />
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="payment" />
                  <img src={Google} className="h-10 w-10" />
                </span>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col gap-8">
            <p className="text-[#333232]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              odit consequatur laudantium voluptates perferendis, consequuntur
              sunt esse
              <span className="text-Brand underline">Privacy policy.</span>
            </p>
            <div className="flex items-center justify-between">
              <div className="space-x-1 lg:w-[70%]">
                <input type="checkbox" name="payment" />
                <span className="text-[#333232]">
                  I have read and agree to the website
                </span>
                <span className="text-Brand underline">
                  Terms and conditions
                </span>
              </div>
              <Link
                to="/thank-you"
                className="bg-Brand text-white text-center w-1/4 md:w-1/3 py-2 rounded-md font-bold md:font-semibold md:text-sm"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex-[1]">
          <h2 className="text-center text-lg font-bold py-2 bg-[#DCDBDB]">
            Order Summary
          </h2>

          <div className=" bg-white shadow-md px-5 rounded-md mb-4 pb-6">
            {/* Delivery Only */}
            <div className="mt-2 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <img src={Van} className="w-14 h-8 object-cover" />
                <h3 className="text-[#5F5D5D]  font-semibold">
                  Delivery Only (5 item)
                </h3>
              </div>
              <hr className="border border-Brand" />
              <span className="space-y-2">
                <span className="flex items-center font-medium  text-[#5F5D5D]">
                  <p className="w-[60%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                  </p>
                  <p className="w-[15%]">QTY:1</p>
                  <p className="w-[25%]">AED 32.00</p>
                </span>
                <span className="flex items-center font-medium  text-[#5F5D5D]">
                  <p className="w-[60%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                  </p>
                  <p className="w-[15%]">QTY:4</p>
                  <p className="w-[25%]">AED 32.00</p>
                </span>
              </span>
            </div>
            {/* Delivery with installation */}
            <div className="mt-2 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <img src={Delivery} className="w-12 h-8 object-cover ml-1" />
                <h3 className="text-[#5F5D5D]  font-semibold">
                  Delivery With Installation (5 item)
                </h3>
              </div>
              <hr className="border border-Brand" />
              <span className="space-y-2">
                <span className="flex justify-between items-center font-medium  text-[#5F5D5D]">
                  <p className="w-[60%]">Lorem ipsum dolor sit</p>
                  <p className="w-[15%]">QTY:1</p>
                  <p className="w-[25%]">AED 32.00</p>
                </span>
                <span className="flex items-center font-medium  text-[#5F5D5D]">
                  <p className="text-black font-bold underline">Scheduled:</p>
                  <p>BatMob - Dubai - Tue 25 Mar</p>
                </span>
              </span>
            </div>
            {/* installation shop */}
            <div className="mt-2 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <img src={Installation} className="w-10 h-8 object-cover" />
                <h3 className="text-[#5F5D5D]  font-semibold">
                  Installation Shop (5 item)
                </h3>
              </div>
              <hr className="border border-Brand" />
              <span className="space-y-2">
                <span className="flex justify-between items-center font-medium  text-[#5F5D5D]">
                  <p className="w-[60%]">Lorem ipsum dolor sit</p>
                  <p className="w-[15%]">QTY:1</p>
                  <p className="w-[25%]">AED 32.00</p>
                </span>

                <span className="flex items-center font-medium  text-[#5F5D5D]">
                  <p className="text-black font-bold underline">Scheduled:</p>
                  <p>BatMob - Dubai - Tue 25 Mar</p>
                </span>
              </span>
            </div>

            <div className="text-sm font-medium space-y-2 bg-[#EDECEC80] p-3 rounded my-4">
              <div className="flex justify-between">
                <p>Item(s) Subtotal</p>
                <p>AED 6,400.00</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>AED 55.00</p>
              </div>
              <div className="flex justify-between">
                <p>Installation</p>
                <p>AED 200.00</p>
              </div>
              <div className="flex justify-between">
                <p>VAT</p>
                <p>AED 350.00</p>
              </div>
            </div>
            <div className="flex items-center gap-2 my-4">
              <input
                placeholder="Enter Cupon Code"
                className="text-sm shadow-lg flex-[2] md:w-[70%] bg-[#DCDBDB80] px-2 py-1.5 rounded-md outline-none"
              />
              <button className="flex-[1] md:w-[30%] shadow-lg py-1 bg-Brand text-white rounded-md font-bold">
                Apply
              </button>
            </div>
            <div className="flex bg-[#EDECEC80] py-1 px-2 rounded justify-between font-semibold mb-4">
              <p>Total</p>
              <p>AED 7,400.00</p>
            </div>
            <div className="flex justify-center">
              <Link to="/cart" className="text-center text-Brand underline">
                View And Edit Cart
              </Link>
            </div>
          </div>
          <p className="text-sm ">
            <span className="font-semibold">Note:</span>
            The Standard Delivery Will Take Within 3/5 Days Excluding Sundays.
          </p>
        </div>

        {/* Mobile Agree */}
        <div className="hidden lg:block">
          <div className="flex flex-col gap-8">
            <p className="text-[#333232]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              odit consequatur laudantium voluptates perferendis, consequuntur
              sunt esse
              <span className="text-Brand underline">Privacy policy.</span>
            </p>
            <div className="flex items-center justify-between">
              <div className="space-x-1 lg:w-[70%]">
                <input type="checkbox" name="payment" />
                <span className="text-[#333232]">
                  I have read and agree to the website
                </span>
                <span className="text-Brand underline">
                  Terms and conditions
                </span>
              </div>
              <Link
                to="/thank-you"
                className="bg-Brand text-white text-center w-1/4 md:w-1/3 py-2 rounded-md font-bold md:font-semibold md:text-sm"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
