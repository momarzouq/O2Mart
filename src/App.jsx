import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AutoParts from "./pages/auto-parts/Index";
import Batteries from "./pages/batteries/Index";
import Tyers from "./pages/tires/Index";
import Rims from "./pages/rims/Index";
import NotFound from "./components/Not404";
import Login from "./pages/registration/Login";
import SignIn from "./pages/registration/SignIn";
import ForgotPassword from "./pages/registration/ForgotPassword";
import Shop from "./pages/home/Shop";
import ProductDetails from "./pages/tires/ProductDetails";
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
        <Route path="/home/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
