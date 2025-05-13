import { IoClose } from "react-icons/io5";
import Modal from "../assets/Modal.png";
import PropTypes from "prop-types";
import { useDiscountModalStore } from "../store/useDiscountModalStore";
import { toast } from "react-toastify";
import { useToastStore } from "../store/useToastStore";

export const DiscountModal = () => {
  const { closeModal } = useDiscountModalStore();
  const { showToast } = useToastStore();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
      {/* Modal Container */}
      <div className="relative flex flex-col gap-2 justify-center items-center bg-white rounded-lg shadow-xl w-[60%] md:w-[90%] overflow-hidden animate-fade-in px-8 py-10 lg:pt-10 lg:pb-4">
        {/* Header */}
        <p className="text-center lg:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Center  */}
        <div className="flex md:flex-col gap-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl lg:text-2xl text-gray-800 mb-2">
              REGISTER AND GET
            </h2>
            <p className="text-4xl lg:text-3xl font-bold text-Brand">20% OFF</p>
          </div>
          <div className="lg:flex lg:justify-center">
            <img
              src={Modal}
              alt="Modal"
              className="max-w-[316px] lg:max-w-[200px]"
            />
          </div>
        </div>
        <p className="text-center w-[550px] md:w-[300px] mb-4 lg:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.  
        </p>
        {/* Email Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            showToast("Su");
          }}
          className="flex flex-col justify-center items-center space-y-4"
        >
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-[450px] md:w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className=" bg-Brand text-white py-1.5 px-8 rounded-md hover:bg-red-600 transition duration-200"
          >
            Inquire Now
          </button>
        </form>

        {/* Modal Footer */}
        <div className="absolute right-6 top-4">
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-700"
            aria-label="Close modal"
          >
            <IoClose size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

DiscountModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
