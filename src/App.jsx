import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import RiskMap from "./pages/RiskMap";
import Shelters from "./pages/Shelters";
import Preparedness from "./pages/Preparedness";
import Emergency from "./pages/Emergency";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/risk-map" element={<RiskMap />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path="/preparedness" element={<Preparedness />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;