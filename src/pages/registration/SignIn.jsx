import React from "react";
import Container from "../../UI/Container";
import { MdAlternateEmail } from "react-icons/md";
import { IoKey, IoPersonOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

export default function SignIn() {
  return (
    <Container>
      <div className="mt-2">
        <h3 className="text-2xl font-semibold">Registration</h3>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 space-y-2">
        {/* button */}
        <div className="flex gap-2 mb-6">
          <button className="bg-[#F5F5F5] text-gray-400  py-3 w-[300px] rounded-xl">
            Login
          </button>
          <button className="bg-red-600 text-white py-3 w-[300px]  rounded-xl">
            Register
          </button>
        </div>
        {/* Inputs */}
        <div className="w-[44%] flex flex-col gap-8 justify-center">
          <div className="relative w-full  border rounded-md">
            <div className="absolute bg-[#F5F5F5] left-0 top-0 h-full w-10 flex items-center justify-center rounded-l-md ">
              <MdAlternateEmail className="text-red-600 text-xl " />
            </div>
            <input
              type="text"
              placeholder="Username / Email"
              className="w-full pl-12 pr-4 py-[14px] rounded-md text-sm bg-white outline-none "
            />
          </div>

          {/* First and last Name */}
          <div className="flex gap-6">
            <div className="relative w-1/2  border rounded-md">
              <div className="absolute bg-[#F5F5F5] left-0 top-0 h-full w-10 flex items-center justify-center rounded-l-md ">
                <IoPersonOutline className="text-red-600 text-xl size-4" />
              </div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-12 pr-4 py-[14px] rounded-md text-sm bg-white outline-none "
              />
            </div>
            <div className="relative w-1/2  border rounded-md">
              <div className="absolute bg-[#F5F5F5] left-0 top-0 h-full w-10 flex items-center justify-center rounded-l-md ">
                <IoPersonOutline className="bx bx-user text-red-600 text-xl size-4" />
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-12 pr-4 py-[14px] rounded-md text-sm bg-white outline-none "
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative w-full  border  rounded">
            <div className="absolute bg-[#F5F5F5] left-0 top-0 h-full w-10 flex items-center justify-center rounded-l">
              <IoKey className="bx bx-user text-red-600 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Password"
              className=" w-full pl-12 pr-4 py-[14px] rounded text-sm bg-white outline-none "
            />
            <FaEye className="absolute right-2 top-1/3 text-gray-600" />
          </div>
          {/* Confirm Password Input */}
          <div className="relative w-full  border  rounded mb-6">
            <div className="absolute bg-[#F5F5F5] left-0 top-0 h-full w-10 flex items-center justify-center rounded-l">
              <IoKey className="bx bx-user text-red-600 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Confirm Password"
              className=" w-full pl-12 pr-4 py-[14px] rounded text-sm bg-white outline-none "
            />
            <FaEye className="absolute right-2 top-1/3 text-gray-600" />
          </div>
        </div>

        {/* forget password */}
        <div className="w-[44%] flex items-center justify-between ">
          <div className="flex items-center gap-1">
            <input type="checkbox" />{" "}
            <span className="text-xs font-semibold text-gray-700">
              I accept the{" "}
            </span>
            <span className="text-xs font-semibold text-red-600">
              Terms of Service and Privacy Policy
            </span>
          </div>
        </div>

        {/* button login */}

        <button className="w-[44%] bg-[#F5F5F5] text-gray-400 hover:text-red-600 py-2 rounded-xl">
          Register
        </button>
      </div>
    </Container>
  );
}
