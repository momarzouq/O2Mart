import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from './ScrolleToTop'
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
