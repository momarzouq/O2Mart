import React from "react";
import { Breadcrumb } from "../../UI/Breadcrumb";
import Container from "../../UI/Container";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import DashboardSideNav from "../../UI/DashboardSideNav";

const orders = [
  {
    id: "#14512",
    date: "March 1, 2025",
    status: "pending payment",
    total: "ABCES22 for 1 item",
    trackingNo: "jbde123456",
  },
  {
    id: "#14512",
    date: "March 1, 2025",
    status: "On hold",
    total: "ABCES22 for 1 item",
    trackingNo: "jbde123456",
  },
  {
    id: "#14512",
    date: "March 1, 2025",
    status: "On hold",
    total: "ABCES22 for 1 item",
    trackingNo: "jbde123456",
  },
  {
    id: "#14512",
    date: "March 1, 2025",
    status: "On hold",
    total: "ABCES22 for 1 item",
    trackingNo: "jbde123456",
  },
];

const Orders = () => {
  return (
    <Container className="my-4">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "My orders" }]}
      />
      <div>
        <h2 className="flex items-center text-2xl font-bold mt-2">My orders</h2>
        {/* Filters */}
        <div className="md:hidden flex items-center justify-center w-full mb-4 ml-10 lg:ml-8">
          <div className="flex gap-4 flex-wrap">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="rounded-lg px-4 pl-8 py-2 w-[500px] lg:w-[300px] outline-none"
                style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
              />
              <HiMiniMagnifyingGlass className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
            </div>
            <select
              className="text-gray-400 rounded-lg px-4 py-2 outline-none"
              style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
            >
              <option>Date</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-6 md:flex-col ">
        <div className="flex md:justify-start">
          <DashboardSideNav />
        </div>
        {/* Filter Mobile  */}
      <div className="hidden md:block">
        <div className=" flex items-start justify-start w-full mb-4">
          <div className="flex gap-2 flex-wrap">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="rounded-lg px-4 pl-8 py-2 w-[200px] outline-none"
                style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
              />
              <HiMiniMagnifyingGlass className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
            </div>
            <select
              className="text-gray-400 rounded-lg px-4 py-2 outline-none"
              style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
            >
              <option>Date</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
      </div>
        <div className="space-y-6 flex-1">
          {/* Table */}
          <div className="overflow-x-auto rounded-lg bg-white p-4 md:p-0">
            <table className="w-full  text-left text-sm md:text-xs">
              <thead>
                <tr className=" font-semibold">
                  <th className="py-3 px-4 md:px-2 md:py-1">Order</th>
                  <th className="py-3 px-4 md:px-2 md:py-1">Date</th>
                  <th className="py-3 px-4 md:px-2 md:py-1">Status</th>
                  <th className="py-3 px-4 md:px-2 md:py-1">Total</th>
                  <th className="py-3 px-4 md:px-2 md:py-1">Actions</th>
                  <th className="py-3 px-4 md:px-2 md:py-1">Tracking No</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 text-[#808080] transition-colors"
                  >
                    <td className="py-3 px-2 md:py-1 md:px-1 md:max-w-6 text-[#EC221F] font-semibold">
                      {order.id}
                    </td>
                    <td className="py-3 px-2 md:py-1 md:px-1 md:max-w-6 md:text-center">
                      {order.date}
                    </td>
                    <td className="py-3 px-2 md:py-1 md:px-1 md:max-w-6 md:text-center capitalize">
                      {order.status}
                    </td>
                    <td className="py-3 px-2 md:py-1 md:px-1 md:max-w-6 md:text-center font-medium">
                      {order.total}
                    </td>
                    <td className="py-3 px-4 md:py-1 md:px-1 md:max-w-6 md:text-center">
                      <button className="bg-[#DCDBDB] text-Brand rounded-lg px-6 md:px-2 py-1.5 font-medium hover:bg-BrandDark transition-all">
                        View
                      </button>
                    </td>
                    <td className="py-3 px-4 md:py-1 md:px-1 md:max-w-6 md:text-center">
                      {order.trackingNo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default Orders;
