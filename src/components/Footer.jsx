import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import Container from "../UI/Container";
import Payment from "../assets/Payment_footer.svg";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {useToastStore} from '../store/useToastStore'
export default function Footer() {
  const {showToast} = useToastStore()
  return (
    <div className="bg-black pt-14 pb-10">
      <Container>
        <div className="flex gap-10 md:flex-col md:items-start">
          {/* Products */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <Link to="/shop" className="text-white font-semibold">
              Products
            </Link>
            <Link to="/auto-parts" className="hover:text-white">
              Auto Parts
            </Link>
            <Link to="/batteries" className="hover:text-white">
              Batteries
            </Link>
            <Link to="/tyers" className="hover:text-white">
              Tyers
            </Link>
            <Link to="/rims" className="hover:text-white">
              Rims
            </Link>
            <Link to="/auto-parts" className="hover:text-white">
              All Products
            </Link>
            <img src={Payment} alt="Payment" />
          </div>
          {/* Help and Support */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <Link
              to="/faq"
              className="text-white font-semibold whitespace-nowrap"
            >
              Help and Support
            </Link>
            <Link to="/track-order" className="hover:text-white">
              Track My Order
            </Link>
            <Link to="contact-us" className="hover:text-white">
              Contact us
            </Link>
            <Link to="/dashboard" className="hover:text-white">
              My account
            </Link>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link to="/faq" className="hover:text-white">
              FAQ
            </Link>
          </div>
          {/* About us */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <Link to="/about-us" className="text-white font-semibold">
              About Us
            </Link>
            <Link to="/about-us" className="hover:text-white">
              Why O2Mart
            </Link>
            <Link to="/become-partner" className="hover:text-white">
              Become Partner
            </Link>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link to="/termsof-us" className="hover:text-white">
              Terms of Use
            </Link>
            <Link to="/warranty-returns-policy" className="hover:text-white">
              Warranty & Returns Policy
            </Link>
          </div>
          {/* logo and Contact us */}
          <div className="flex flex-col space-y-4 text-white">
            <img src={Logo} alt="Logo" className="w-40" />
            <p>Cusomer Service Hours</p>
            <p>Monday-Friday:</p>
            <p>7:00am-8:00pm.</p>
            <p>Sunday: Closed.</p>
            <div className="flex gap-6">
              <FaFacebookF size={25} />
              <FaInstagram size={25} />
              <FaLinkedinIn size={25} />
            </div>

            <div className="relative flex flex-col gap-2 w-80 lg:w-60">
              <label htmlFor="email" className="text-Brand font-medium text-sm">
                Get the Latest Deals & Updates
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="text-sm border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <FaTelegramPlane onClick={()=> {showToast("Your Messege Sended")}} className="absolute right-4 top-9 text-Brand size-6" />
            </div>
          </div>
        </div>
      </Container>
      <hr className="mt-6 border-1 border-gray-700" />
      <p className="text-sm text-center text-Brand mt-8 ">
        Copyright © 2025 O2Mart. All Rights Reserved
      </p>
    </div>
  );
}
