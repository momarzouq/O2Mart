import React from "react";
import Container from "../../UI/Container";
import { Breadcrumb } from "../../UI/Breadcrumb";
import DashboardSideNav from "../../UI/DashboardSideNav";

const AccountDetails = () => {
  return (
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Account details" }]}
        />
        <h2 className="text-2xl font-bold">Account details</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
        <DashboardSideNav />

        <div class="space-y-6 w-full">
          <div>
            <label for="firstName" class="block text-lg mb-2">
              First name <span>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value="Test"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label for="lastName" class="block text-lg mb-2">
              Last name <span>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value="Test"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label for="displayName" class="block text-lg mb-2">
              Display name <span>*</span>
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value="Test"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <p class="text-sm text-gray-500 mt-1">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
          <div>
            <label for="email" class="block text-lg mb-2">
              Email address <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value="@testing1.com"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label for="mobile" class="block text-lg mb-2">
              Mobile number <span>*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value="111 222 333 444 555"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              class="bg-Brand text-white font-medium py-2 px-4 rounded-xl"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AccountDetails;
