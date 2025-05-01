import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AutoParts from './pages/auto-parts/Index'
import Batteries from './pages/batteries/Index'
import Tyres from './pages/auto-parts/Index'
import Rims from './pages/rims/Index'
import NotFound from "./components/Not404";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auto-parts" element={<AutoParts />} />
        <Route path="/batteries" element={<Batteries />} />
        <Route path="/tyres" element={<Tyres />} />
        <Route path="/rims" element={<Rims />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Layout>
  );
}

export default App;
