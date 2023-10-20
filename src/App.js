import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Navbar from "./pages/navbar/Navbar";

const  App = () => {
  return (
    <div className="App relative">
      <Router>
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
