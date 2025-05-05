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
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "My account" }]}
        />
        <h2 className="text-2xl font-bold">My account</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
        <DashboardSideNav />
        <div className="space-y-6 flex-1">
          {/* Filters */}
          <div className="flex gap-4 flex-wrap">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="rounded-xl px-4 pl-8 py-2 w-full max-w-xs outline-none"
                style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
              />
              <HiMiniMagnifyingGlass className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
            </div>
            <select
              className="rounded-xl px-4 py-2 outline-none"
              style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
            >
              <option>Date</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3">order</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Total</th>
                  <th className="py-3">Actions</th>
                  <th className="py-3">Tracking No</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 text-red-600">{order.id}</td>
                    <td className="py-3">{order.date}</td>
                    <td className="py-3 capitalize">{order.status}</td>
                    <td className="py-3">{order.total}</td>
                    <td className="py-3">
                      <button className="bg-[#f2f2f2] text-red-500 rounded px-4 py-1">
                        View
                      </button>
                    </td>
                    <td className="py-3">{order.trackingNo}</td>
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
