import React from "react";
import Container from "../UI/Container";
import { Breadcrumb } from "../UI/Breadcrumb";

export default function TrackOrder() {
  return (
    <Container>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Track Order" }]}
      />
      <h3 className="text-3xl font-bold mt-4">Track Order</h3>
      <div className="space-y-6 mt-8">
        <div className="flex flex-col ">
          <label className="text-sm  mb-2">Order Tracking Number</label>
          <input className="block tracking-order-input  p-4 rounded-md outline-none" />
        </div>
        <button className="text-white text-sm font-medium bg-[#EC221F] py-2 px-10 rounded">
          Track Order
        </button>
      </div>
    </Container>
  );
}
