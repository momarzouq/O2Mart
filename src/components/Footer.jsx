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
export default function Footer() {
  return (
    <div className="bg-black pt-14 pb-10">
      <Container>
        <div className="flex gap-40 xl:gap-10 md:flex-col md:items-start">
          {/* Products */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <p className="text-white font-semibold">Products</p>
            <Link to="/auto-parts">Auto Parts</Link>
            <Link to="/batteries">Batteries</Link>
            <Link to="/tyers">Tyers</Link>
            <Link to="/rims">Rims</Link>
            <Link to="/auto-parts">All Products</Link>
            <img src={Payment} alt="Payment" />
          </div>
          {/* Help and Support */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <p className="text-white font-semibold">Help and Support</p>
            <Link to="/track-order">Track My Order</Link>
            <Link to="contact-us">Contact us</Link>
            <Link to="/dashboard">My account</Link>
            <Link to="/blog">Blog</Link>
            <p>FAQ</p>
          </div>
          {/* About us */}
          <div className="flex flex-col text-gray-300 space-y-4">
            <Link to="/about-us" className="text-white font-semibold">
              About Us
            </Link>
            <p>Why O2Mart</p>
            <Link to="/become-partner">Become Partner</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="/termsof-us">Terms of Use</Link>
            <Link to="/warranty-returns-policy">Warranty & Returns Policy</Link>
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
              <FaTelegramPlane className="absolute right-4 top-9 text-Brand size-6" />
            </div>
          </div>
        </div>
      </Container>
      <hr className="mt-6 border-1 border-gray-700" />
      <p className="text-sm text-center text-white mt-8">
        Copyright © 2025 O2Mart. All Rights Reserved
      </p>
    </div>
  );
}
