import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CouponSection() {
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [couponSaved, setCouponSaved] = useState(false);

  const handleCouponChange = (e) => {
    const value = e.target.value;
    setCoupon(value);
    setIsValid(value === "DISCOUNT10");
    setCouponSaved(false); // Reset saved state when coupon is changed
  };

  const handleSaveCoupon = () => {
    if (isValid) {
      // Logic to save the coupon (you can add API calls or store the coupon here)
      setCouponSaved(true);
    }
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

      {showCoupon && (
        <div className="mt-3">
          <button
            className={`w-full py-2 bg-Brand text-white font-semibold rounded ${!isValid ? "cursor-not-allowed opacity-50" : ""}`}
            onClick={handleSaveCoupon}
            disabled={!isValid}
          >
            Save Coupon
          </button>
          {couponSaved && <p className="mt-2 text-green-500">Coupon saved successfully!</p>}
          {!isValid && coupon && <p className="mt-2 text-red-500">Invalid coupon code</p>}
        </div>
      )}
    </div>
  );
}
