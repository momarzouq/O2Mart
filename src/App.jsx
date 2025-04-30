import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Batteries from "./pages/Batteries";
import Tyres from "./pages/Tyres";
import AutoParts from "./pages/Auto-Parts";
import Rims from "./pages/Rims";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auto-parts" element={<AutoParts />} />
        <Route path="/batteries" element={<Batteries />} />
        <Route path="/tyres" element={<Tyres />} />
        <Route path="/rims" element={<Rims />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
