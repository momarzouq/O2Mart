import Home from "./pages/home/Index";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AutoParts from "./pages/auto-parts/Index";
import Batteries from "./pages/batteries/Index";
import Tyers from "./pages/tires/Index";
import Rims from "./pages/rims/Index";
import NotFound from "./components/404";
import Login from "./pages/registration/Login";
import SignIn from "./pages/registration/SignIn";
import ForgotPassword from "./pages/registration/ForgotPassword";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Inquiry from "./components/Inquiry";
import Comparsion from "./components/Comparsion";
import Dashboard from "./pages/dashboard/Index";
import Wishlist from "./pages/dashboard/Wishlist";
import Orders from "./pages/dashboard/Orders";
import DashboardTrackOrder from "./pages/dashboard/TrackOrder";
import SavedCards from "./pages/dashboard/SavedCards";
import AddressBook from "./pages/dashboard/AddressBook";
import AccountDetails from "./pages/dashboard/AccountDetails";
import ChangePassword from "./pages/dashboard/ChangePassword";
import MyGarage from "./pages/dashboard/MyGarage";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TrackOrder from "./pages/TrackOrder";
import Blog from "./pages/Blog";
import TermsofUs from "./pages/TermsofUs";
import WarrantyReturnsPolicy from "./pages/WarrantyReturnsPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BecomePartner from "./pages/BecomePartner";
import FAQ from "./pages/FAQ";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auto-parts" element={<AutoParts />} />
        <Route path="/batteries" element={<Batteries />} />
        <Route path="/tires" element={<Tyers />} />
        <Route path="/rims" element={<Rims />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/comparsion" element={<Comparsion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-tracking" element={<DashboardTrackOrder />} />
        <Route path="/saved-cards" element={<SavedCards />} />
        <Route path="/addresses" element={<AddressBook />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/my-garage" element={<MyGarage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/termsof-us" element={<TermsofUs />} />
        <Route path="/warranty-returns-policy" element={<WarrantyReturnsPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/become-partner" element={<BecomePartner/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
