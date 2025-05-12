import React from "react";
import { Breadcrumb } from "../../UI/Breadcrumb";
import DashboardSideNav from "../../UI/DashboardSideNav";
import Container from "../../UI/Container";

const TrackOrder = () => {
  return (
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Order Tracking" }]}
        />
        <h2 className="text-2xl font-bold">My account</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
      <div className="flex md:justify-start">
          <DashboardSideNav />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-[#5F5D5D]">
            Track Your Order
          </h1>

          <div className="space-y-4">
            <label htmlFor="tracking-number">Order Tracking Number:</label>
            <input
              id="tracking-number"
              type="text"
              placeholder="Search"
              className="rounded-xl px-4 pl-8 py-3 w-full max-w-xl outline-none"
              style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
            />
          </div>

          <button className="bg-Brand rounded-md text-white px-6 py-2">
            Track Order
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TrackOrder;
