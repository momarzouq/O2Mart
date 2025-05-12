import React from "react";
import Container from "../UI/Container";
import { Breadcrumb } from "../UI/Breadcrumb";

export default function BecomePartner() {
  return (
    <Container>
      <div className="flex lg:flex-col gap-8 my-8">
        <div className="flex-[3] ">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">
              Become an O2Mart Supplier
            </h3>
            <p className=" text-sm text-[#444444]">
              Here’s your chance to connect with customers you never knew
              existed.
            </p>
            <p className=" text-sm text-[#444444]">
              Transform your auto parts business by joining O2Mart’s network of
              suppliers.  We are bridging the gap between suppliers and
              customers, by offering a one-stop-shop digital marketplace for all
              parts and service providers in the UAE.
            </p>
            <p className=" text-sm text-[#444444]">
              Whether you’re in Sharjah, Abu Dhabi, or any of the seven
              emirates, we help connect clients hundreds of kilometers away with
              your products and services. Join us on our journey to digitize the
              UAE’s auto parts market and become part of the movement.
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <h3 className="text-3xl font-bold mb-4">Got a Defective Part?</h3>

            <ul className="list-decimal list-inside text-sm text-[#444444] space-y-2">
              <li> Digital presence, zero hassle</li>
              <li> Access a wider customer base across the UAE</li>
              <li>
                Increase visibility of your inventory and car-related services
              </li>
              <li>Reach customers searching for specific parts or services</li>
              <li>Complement your existing business operations</li>
              <li>Get paid securely and on time</li>
            </ul>
          </div>
        </div>
        <div className="flex-[2]">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col ">
              <label className="text-sm font-medium  mb-1">Your Name</label>
              <input className="block border border-gray-400 py-2 px-4 rounded outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium  mb-1">Phone Number</label>
              <input className="block border border-gray-400 py-2 px-4 rounded outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium  mb-1">Name of Store</label>
              <input className="block border border-gray-400 py-2 px-4 rounded outline-none" />
            </div>
            <div className="flex justify-start ">
              <button className="text-white text-sm bg-Brand py-2 px-8 rounded">
                Request a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
