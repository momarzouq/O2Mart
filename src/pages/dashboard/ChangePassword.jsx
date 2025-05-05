import React from "react";
import Container from "../../UI/Container";
import { Breadcrumb } from "../../UI/Breadcrumb";
import DashboardSideNav from "../../UI/DashboardSideNav";

const ChangePassword = () => {
  return (
    <Container className="space-y-12 py-8">
      <div className="space-y-3">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Security" }]}
        />
        <h2 className="text-2xl font-bold">Security</h2>
      </div>

      <div className="flex gap-6 md:flex-col">
        <DashboardSideNav />
        <div className="space-y-6 w-full">
          <h2 className="font-semibold">Password change</h2>
          <div>
            <label for="current-pass" class="block text-lg mb-2">
              Current password (leave blank to leave unchanged){" "}
            </label>
            <input
              type="password"
              id="current-pass"
              name="current-pass"
              value="@testing1.com"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label for="new-pass" class="block text-lg mb-2">
              New password (leave blank to leave unchanged)
            </label>
            <input
              type="password"
              id="new-pass"
              name="new-pass"
              value="@testing1.com"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label for="confirm-pass" class="block text-lg mb-2">
              Confirm new password
            </label>
            <input
              type="password"
              id="confirm-pass"
              name="confirm-pass"
              value="@testing1.com"
              class="w-full border border-[#BDBDBD8A] rounded-xl p-3"
              required
            />
          </div>

          <button
            type="submit"
            class="bg-Brand text-white font-medium py-2 px-4 rounded-xl"
          >
            Save changes
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ChangePassword;
