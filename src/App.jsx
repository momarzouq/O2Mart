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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
