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
import { useToastStore } from "../store/useToastStore";
import LinkWithScroll from "./LinkWithScroll";
export default function Footer() {
  const { showToast } = useToastStore();
  return (
    <div className="bg-black pt-14 pb-10">
      <Container>
        <div className="flex gap-24 xl:gap-10 md:flex-col md:items-start">
          {/* Products */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <LinkWithScroll to="/shop" className="text-white font-semibold">
              Products
            </LinkWithScroll>
            <LinkWithScroll to="/auto-parts" className="hover:text-white">
              Auto Parts
            </LinkWithScroll>
            <LinkWithScroll to="/batteries" className="hover:text-white">
              Batteries
            </LinkWithScroll>
            <LinkWithScroll to="/tyers" className="hover:text-white">
              Tyers
            </LinkWithScroll>
            <LinkWithScroll to="/rims" className="hover:text-white">
              Rims
            </LinkWithScroll>
            <LinkWithScroll to="/auto-parts" className="hover:text-white">
              All Products
            </LinkWithScroll>
            <img src={Payment} alt="Payment" />
          </div>
          {/* Help and Support */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <LinkWithScroll
              to="/faq"
              className="text-white font-semibold whitespace-nowrap"
            >
              Help and Support
            </LinkWithScroll>
            <LinkWithScroll to="/track-order" className="hover:text-white">
              Track My Order
            </LinkWithScroll>
            <LinkWithScroll to="contact-us" className="hover:text-white">
              Contact us
            </LinkWithScroll>
            <LinkWithScroll to="/dashboard" className="hover:text-white">
              My account
            </LinkWithScroll>
            <LinkWithScroll to="/blog" className="hover:text-white">
              Blog
            </LinkWithScroll>
            <LinkWithScroll to="/faq" className="hover:text-white">
              FAQ
            </LinkWithScroll>
          </div>
          {/* About us */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <LinkWithScroll to="/about-us" className="text-white font-semibold">
              About Us
            </LinkWithScroll>
            <LinkWithScroll to="/about-us" className="hover:text-white">
              Why O2Mart
            </LinkWithScroll>
            <LinkWithScroll to="/become-partner" className="hover:text-white">
              Become Partner
            </LinkWithScroll>
            <LinkWithScroll to="/privacy-policy" className="hover:text-white">
              Privacy policy
            </LinkWithScroll>
            <LinkWithScroll to="/termsof-us" className="hover:text-white">
              Terms of Use
            </LinkWithScroll>
            <LinkWithScroll
              to="/warranty-returns-policy"
              className="hover:text-white"
            >
              Warranty & Returns Policy
            </LinkWithScroll>
          </div>
          {/* logo and Contact us */}
          <div className="flex flex-col space-y-4 text-white">
           <LinkWithScroll to="/"> <img src={Logo} alt="Logo" className="w-40" /></LinkWithScroll>
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
              <FaTelegramPlane
                onClick={() => {
                  showToast("Your Messege Sended");
                }}
                className="absolute right-4 top-9 text-Brand size-6"
              />
            </div>
          </div>
        </div>
      </Container>
      <hr className="mt-6 border-1 border-gray-700" />
      <p className="text-sm text-center text-white mt-8 sm:mx-4">
        O2 Mart – All rights reserved · Made with <span className="text-Brand">❤</span> by Pikyhost
      </p>
    </div>
  );
}
