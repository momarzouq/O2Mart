import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrolleToTop";
// import { BiMessageAltDetail } from "react-icons/bi";

// Accept hideContact as a prop
function Layout({ children, hideContact = false }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <ScrollToTopButton />

      {/* Contact Us - Bottom Right */}
      {/* {!hideContact && (
        <div className="absolute z-50 flex items-center gap-2 rounded shadow-md px-3 right-8 bottom-[20%] bg-[#F5F5F5] w-34">
          <span className="text-sm bg-white rounded-lg py-1 px-2">
            Contact us
          </span>
          <BiMessageAltDetail className="bg-Brand rounded-full p-2 text-white text-xl w-10 h-10" />
        </div>
      )} */}

      <Footer />
    </div>
  );
}

export default Layout;
