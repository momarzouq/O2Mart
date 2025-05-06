import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CouponSection() {
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleCouponChange = (e) => {
    const value = e.target.value;
    setCoupon(value);
    setIsValid(value === "DISCOUNT10");
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center">
        <span>Add a coupon</span>
        <button
          className="text-sm font-medium text-gray-700 hover:text-Brand"
          onClick={() => setShowCoupon(!showCoupon)}
        >
          {showCoupon ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {showCoupon && (
        <div className="mt-3 flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
          <input
            type="text"
            placeholder="Add a coupon"
            className="flex-1 outline-none bg-transparent text-sm"
            value={coupon}
            onChange={handleCouponChange}
          />
          {isValid && <span className="text-green-500 text-lg">✓</span>}
        </div>
      )}
    </div>
  );
}
