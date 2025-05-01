import React from "react";
import Container from "../../UI/Container";

export default function ForgotPassword() {
  return (
    <Container>
      <div className="flex flex-col space-y-6">
        <h3 className="text-2xl font-semibold mt-4">My Account</h3>
        <p>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.*
        </p>
        <div className="flex flex-col space-y-8 mt-4">
          <div className="w-full border rounded-md">
            <input
              type="text"
              placeholder="Username / Email"
              className="w-full px-4 pr-4 py-[14px] rounded-md text-sm bg-white outline-none "
            />
          </div>
          <button className="bg-red-600 text-white py-3 w-[300px] rounded-xl">
            Login
          </button>
        </div>
      </div>
    </Container>
  );
}
