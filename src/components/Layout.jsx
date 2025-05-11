import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrolleToTop";
import Inquiry from "./Inquiry";
import SidebarCart from "./Sidebar";
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <SidebarCart />
      <Inquiry />
      <div className="min-h-screen">{children}</div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;
