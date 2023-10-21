import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Navbar from "./pages/navbar/Navbar";
import Website from "./pages/websites/Website";
import Hardware from "./pages/hardware/Hardware";
import Gallery from "./pages/gallery/Gallery";

const  App = () => {
  return (
    <div className="App relative">
      <Router>
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/website" element={<Website />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
