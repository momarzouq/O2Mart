import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ThankYou from "./ThankYou";
import useModalStore from "../store/getqouteStore";
export default function Inquiry() {
  const [step, setStep] = useState(1);
  const { isOpen, closeModal } = useModalStore();
  //Add Another Part
  const [parts, setParts] = useState([{}]);
  const addAnotherPart = () => {
    setParts([...parts, {}]);
  };
  //Differen Rear Tyer Size
  const [tyreSizes, setTyreSizes] = useState([{}]);
  const addAnotherTyreSize = () => {
    setTyreSizes([...tyreSizes, {}]);
  };

  if (!isOpen) return null;
  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 7));
  };

  const renderStepForm = () => {
    switch (step) {
      // Get Qoute Auto Parts
      case 1:
        return (
          <form onSubmit={handleNext} className="space-y-4 text-sm">
            {/* What Do You Need */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold">
                What Do You Need?<span className="text-Brand ">*</span>
              </label>
              <select className="w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                <option>Auto Part</option>
              </select>
            </div>

            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Make<span className="text-Brand ">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>Select Car Make</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Model<span className="text-Brand ">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>Select Car Model</option>
                </select>
              </div>
            </div>

            {/* Car Year */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold">
                Car Year<span className="text-Brand ">*</span>
              </label>
              <select className="w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                <option>Select Car Year</option>
              </select>
            </div>

            {/* VIN / License Upload */}
            <div className="flex gap-[18px] items-end">
              <div className="flex flex-col w-1/2">
                <label className="mb-1 font-bold">VIN/Chassis Number</label>
                <input
                  type="text"
                  placeholder="VIN/Chassis Number"
                  className="border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
                />
              </div>

              <div className="w-[4.1%] flex flex-col items-center pb-1">
                <span className="flex items-center gap-1 text-md text-Brand font-bold">
                  <BsExclamationCircle />
                  OR
                </span>
              </div>

              <div className="flex flex-col w-[40%] md:w-[45%]">
                <label className="md:text-xs mb-1 font-bold">
                  Upload Car License
                </label>
                <button
                  type="button"
                  className="text-gray-500 text-start border border-gray-500 rounded-md px-1.5 py-2 md:py-[10px] focus:border-Brand"
                >
                  Upload
                </button>
              </div>
            </div>

            {/* Required Part / Quantity / Photo Upload */}
            <div>
              {parts.map((_, index) => (
                <div key={index} className="flex gap-2 items-end mb-4">
                  <div className="flex flex-col w-1/2">
                    <label className="mb-1 font-bold">
                      Required Part<span className="text-Brand">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter The Required Part"
                      className="border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
                    />
                  </div>
                  <div className="flex flex-col w-[12%] max-w-14">
                    <label className="mb-1 font-bold">QTY</label>
                    <input
                      type="number"
                      placeholder="QTY"
                      className="border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
                    />
                  </div>
                  <div className="flex flex-col w-[40%] md:w-[45%]">
                    <label className="md:text-xs mb-1 font-bold">
                      Upload Part Photo<span className="text-Brand">*</span>
                    </label>
                    <button
                      type="button"
                      className="text-gray-500 text-start border border-gray-500 rounded-md px-2 py-2 focus:border-Brand"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Another Part */}
              <button
                type="button"
                className="font-[500] text-lg flex items-center text-Brand"
                onClick={addAnotherPart}
              >
                <span className="flex items-center text-Brand gap-1">
                  <IoMdAddCircleOutline size={22} />
                  Add Another Part
                </span>
              </button>
            </div>
            {/* Next Button */}
            <button
              type="submit"
              className="w-28 px-2 bg-Brand text-white py-1.5 md:text-xs rounded-md font-semibold"
            >
              Next
            </button>
          </form>
        );
      //  Get Qoute Battery
      case 2:
        return (
          <form onSubmit={handleNext} className="space-y-4 text-sm">
            {/* What Do You Need */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold">
                What Do You Need?<span className="text-Brand">*</span>
              </label>
              <select className="w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                <option>Battery </option>
              </select>
            </div>

            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Make<span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>Select Car Make</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Model<span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>Select Car Model</option>
                </select>
              </div>
            </div>
            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Year<span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>Select Car Make</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col ">
                <label className=" md:text-[10px] whitespace-nowrap flex items-center gap-1 mb-1 font-bold">
                  VIN/Chassis Number<span className="text-Brand">*</span>
                  <HiOutlineExclamationCircle className="text-Brand size-4" />
                </label>
                <input
                  type="text"
                  placeholder="VIN/Chassis Number"
                  className="md:w-full border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
                />
              </div>
            </div>

            {/* Required Part / Quantity / Photo Upload */}
            <div className="flex gap-2 items-end">
              <div className="w-full flex flex-col">
                <label className="mb-1 font-bold">Battery Space</label>
                <input
                  type="text"
                  placeholder="Enter The Battery Space"
                  className="border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              type="submit"
              className="w-28 px-2 bg-Brand text-white py-1.5 md:text-xs rounded-md font-semibold"
            >
              Next
            </button>
          </form>
        );
      // Get Qoute Tires By Size
      case 3:
        return (
          <form onSubmit={handleNext} className="space-y-4 text-sm">
            {/* What Do You Need */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold">
                What Do You Need?<span className="text-Brand">*</span>
              </label>
              <select className="w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                <option>Tiers By Size </option>
              </select>
            </div>

            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Width <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>55</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Height <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>55</option>
                </select>
              </div>
            </div>
            {/* Car Make & Model */}
            <div>
              {tyreSizes.map((_, index) => (
                <div key={index} className="flex gap-2 mb-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 font-bold">
                      Diameter <span className="text-Brand">*</span>
                    </label>
                    <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                      <option>000</option>
                      <option>100</option>
                      <option>200</option>
                      <option>300</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 font-bold">Quantity</label>
                    <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                      <option>Select Quantity</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              ))}

              {/* زر لإضافة مجموعة جديدة */}
              <button
                type="button"
                className="font-[500] text-lg flex items-center text-Brand"
                onClick={addAnotherTyreSize}
              >
                <span className="flex items-center text-Brand gap-1">
                  <IoMdAddCircleOutline size={22} />
                  Different Rear Tyre Size
                </span>
              </button>
            </div>

            {/* Next Button */}
            <button
              type="submit"
              className="w-28 px-2 bg-Brand text-white py-1.5 md:text-xs rounded-md font-semibold"
            >
              Next
            </button>
          </form>
        );
      // Get Qoute Tires By Car Make
      case 4:
        return (
          <form onSubmit={handleNext} className="space-y-4 text-sm">
            {/* What Do You Need */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold">
                What Do You Need?<span className="text-Brand">*</span>
              </label>
              <select className="w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                <option>Tiers By Car Make </option>
              </select>
            </div>

            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Make <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>55</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Modal <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>55</option>
                </select>
              </div>
            </div>
            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Diameter <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>000</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="md:text-[10px] mb-1 font-bold">VIN/ Chassis No</label>
                <input
                  type="text"
                  placeholder="55"
                  className="md:w-full border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <label className="mb-1 font-bold">Quantity</label>
              <input
                type="text"
                placeholder="1"
                className="border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
              />
            </div>

            {/* Next Button */}
            <button
              type="submit"
              className="w-28 px-2 bg-Brand text-white py-1.5 md:text-xs rounded-md font-semibold"
            >
              Next
            </button>
          </form>
        );
      // Get Qoute RIMS
      case 5:
        return (
          <form onSubmit={handleNext} className="space-y-4 text-sm">
            {/* What Do You Need */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold">
                What Do You Need?<span className="text-Brand">*</span>
              </label>
              <select className="w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                <option>RIMS</option>
              </select>
            </div>

            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Make <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>55</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Car Modal <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>55</option>
                </select>
              </div>
            </div>
            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-bold">
                  Diameter <span className="text-Brand">*</span>
                </label>
                <select className="md:w-full text-gray-500 border border-gray-500 rounded-md p-2 outline-none focus:border-Brand">
                  <option>000</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-[10px] mb-1 font-bold">VIN/ Chassis No</label>
                <input
                  type="text"
                  placeholder="55"
                  className="md:w-full border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <label className="mb-1 font-bold">Quantity</label>
              <input
                type="text"
                placeholder="1"
                className="border border-gray-500 rounded-md py-2 px-1 outline-none focus:border-Brand"
              />
            </div>

            {/* Next Button */}
            <button
              type="submit"
              className="w-28 px-2 bg-Brand text-white py-1.5 md:text-xs rounded-md font-semibold"
            >
              Next
            </button>
          </form>
        );

      //  Contact Details
      case 6:
        return (
          <form onSubmit={handleNext} className="space-y-4 text-sm">
            {/* What Do You Need */}
            <div className="w-full flex flex-col">
              <label className="mb-1 font-bold">
                Full Name<span className="text-Brand">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-500 rounded-md py-2 px-2  outline-none focus:border-Brand"
              />
            </div>

            {/* Car Make & Model */}
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col">
                <label className="mb-1 font-bold">
                  Phone Number<span className="text-Brand">*</span>
                </label>
                <input
                  type="text"
                  placeholder="11 00 44 33 "
                  className="md:w-full border border-gray-500 rounded-md py-2 px-2 outline-none focus:border-Brand"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-1 font-bold">
                  Email <span className="text-Brand">*</span>
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="md:w-full border border-gray-500 rounded-md py-2 px-2  outline-none focus:border-Brand"
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              type="submit"
              className="w-1/3 lg:w-[50%] px-2 bg-Brand text-white py-1.5 md:text-xs rounded-md font-semibold"
            >
              Get Me The Best Offer!
            </button>
          </form>
        );

      case 7:
        return <ThankYou />;

      default:
        return null;
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative z-10 bg-white px-10 md:px-6 py-6 rounded-lg shadow-md w-[60%] md:w-[90%] h-[90%] my-12 overflow-y-auto">
            <button
              onClick={() => closeModal(true)}
              className="absolute top-6 right-6 z-50 text-gray-600 hover:text-Brand text-xl"
              aria-label="Close"
            >
              <IoClose size={20} />
            </button>
            <div>
              {step <= 6 && (
                <h3
                  className={`text-3xl text-center font-bold my-4 ${
                    step >= 6 ? "text-Brand" : "text-black"
                  }`}
                >
                  INQUIRY FORM
                </h3>
              )}
              {/* Progress Indicator */}
              {step <= 6 && (
                <div className="flex items-center justify-center mb-4">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="flex flex-col items-center gap-2">
                        <p
                          className={`w-7 h-7 flex text-xs items-center justify-center rounded-full ${
                            (s === 1 && step < 6) || (s === 2 && step === 6)
                              ? "bg-Brand text-white"
                              : "bg-gray-200 text-gray-700"
                          } font-semibold`}
                        >
                          {s}
                        </p>
                        <span
                          className={`text-center text-xs mt-1 font-medium ${
                            (s === 1 && step < 6) || (s === 2 && step === 6)
                              ? "text-Brand"
                              : "text-black"
                          }`}
                        >
                          {s === 1 ? "Inquiry Details" : "Contact Details"}
                        </span>
                      </div>
                      {s === 1 && <hr className="w-40 mb-6 border-gray-300" />}
                    </div>
                  ))}
                </div>
              )}
              {/* Step Form */}
              <div>{renderStepForm()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
