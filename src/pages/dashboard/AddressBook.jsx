import React from "react";
import DashboardSideNav from "../../UI/DashboardSideNav";
import Container from "../../UI/Container";
import { Breadcrumb } from "../../UI/Breadcrumb";

const AddressBook = () => {
  return (
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Addresses" }]}
        />
        <h2 className="text-2xl font-bold">My Addresses</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
        <DashboardSideNav />
        <div className="space-y-6"></div>
      </div>
    </Container>
  );
};

export default AddressBook;
