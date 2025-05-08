import React from "react";
import DashboardSideNav from "../../UI/DashboardSideNav";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../UI/Breadcrumb";

const Dashboard = () => {
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
          <div className="flex-1 space-y-3">
            <p className="font-semibold">
              <span>Hello wiyeg69284</span> ( not wiyeg69284?{" "}
              <Link to="/logout" className="text-Brand underline">
                Log out
              </Link>{" "}
              )
            </p>
            <p className="text-[#5F5D5D] text-sm">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
