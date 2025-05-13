import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrolleToTop";
import Inquiry from "./Inquiry";
import SidebarCart from "./Sidebar";
import ContactUsButton from "../UI/ContactUsButton";
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <SidebarCart />
      <Inquiry />
      <div className="min-h-screen">{children}</div>
      <ContactUsButton />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;
