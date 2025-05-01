import React from "react";
import Container from "../../UI/Container";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

export default function Login() {
  return (
    <Container>
      <div className="mt-2">
        <h3 className="text-2xl font-semibold">My Account</h3>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 space-y-2">
        {/* button */}
        <div className="flex gap-2 mb-6">
          <button className="bg-red-600 text-white py-3 w-[300px] rounded-xl">
            Login
          </button>
          <button className="bg-[#F5F5F5] text-gray-400 py-3 w-[300px]  rounded-xl">
            Register
          </button>
        </div>
        {/* Inputs */}
        <div className="w-[44%] flex flex-col gap-8 justify-center">
          <div className="relative w-full  border rounded-md">
            <div className="absolute bg-[#F5F5F5] left-0 top-0 h-full w-10 flex items-center justify-center rounded-l-md ">
              <MdPersonAddAlt1 className="bx bx-user text-red-600 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Username / Email"
              className="w-full pl-12 pr-4 py-[14px] rounded-md text-sm bg-white outline-none "
            />
          </div>

          {/* Password Input */}
          <div className="relative w-full  border  rounded mb-6">
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
        </div>

        {/* forget password */}
        <div className="w-[44%] flex items-center justify-between ">
          <div className="flex items-center gap-1">
            <input type="checkbox" />{" "}
            <span className="text-sm text-gray-700">Remember me</span>
          </div>
          <p className="text-red-600 text-sm">Forgot Password?</p>
        </div>

        {/* button login */}

        <button className="w-[44%] bg-[#F5F5F5] text-red-600 py-2 rounded-xl">
          Login
        </button>
        <p className="w-[44%] text-start text-sm">
          Don't have accound ?
          <span className=" text-sm text-red-600"> Register Now</span>
        </p>
      </div>
    </Container>
  );
}
