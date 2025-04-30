import Navbar from "./Navbar";
import ScrollToTopButton from "../ScrolleToTop";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;
