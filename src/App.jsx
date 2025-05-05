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
import Shop from "./pages/home/Shop";
import ProductDetails from "./components/ProductDetails";
import Inquiry from "./components/Inquiry";
import Comparsion from "./components/Comparsion";
import Dashboard from "./pages/dashboard";
import Wishlist from "./pages/dashboard/Wishlist";
import Orders from "./pages/dashboard/Orders";
import TrackOrder from "./pages/dashboard/TrackOrder";
import SavedCards from "./pages/dashboard/SavedCards";
import AddressBook from "./pages/dashboard/AddressBook";
import AccountDetails from "./pages/dashboard/AccountDetails";
import ChangePassword from "./pages/dashboard/ChangePassword";

function App() {
  return (
    <Layout>
      <Routes>
        {/* skip Home entirely */}
        <Route exact path="/" element={<Home />} />
        <Route path="/auto-parts" element={<AutoParts />} />
        <Route path="/batteries" element={<Batteries />} />
        <Route path="/tires" element={<Tyers />} />
        <Route path="/rims" element={<Rims />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/comparsion" element={<Comparsion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-tracking" element={<TrackOrder />} />
        <Route path="/saved-cards" element={<SavedCards />} />
        <Route path="/addresses" element={<AddressBook />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
