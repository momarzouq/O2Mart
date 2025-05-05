import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrolleToTop";
import Inquiry from "./Inquiry";
import SidebarCart from "./Sidebar";
// import { BiMessageAltDetail } from "react-icons/bi";
// import ContactUs from "../assets/contact-us.svg";
// Accept hideContact as a prop
function Layout({ children, hideContact = false }) {
  
  return (
    <div className="relative">
      <Navbar />

      <SidebarCart />
      <Inquiry />
      <div className="min-h-screen">{children}</div>
      <ScrollToTopButton />

      {/* Contact Us - Bottom Right */}
      {/* {!hideContact && (
        <div className="absolute z-50 flex items-center gap-2 rounded shadow-md right-8 bottom-[20%] bg-[#F5F5F5] w-34">
          <img src={ContactUs} alt="Contact Us" />
          <BiMessageAltDetail className="bg-Brand rounded-full p-2 text-white text-xl w-10 h-10" />
        </div>
      )} */}

      <Footer />
    </div>
  );
}

export default Layout;
