import { Route, Routes, useLocation } from "react-router-dom";
// Components
// import Sidebar from "./pages/admin/sidebar/Sidebar";
// import Header from "./pages/admin/layouts/header/Header";
// Auth
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// Other pages
// import Coming from "./pages/admin/layouts/components/coming/Coming";
import Error from "./pages/error/Error";
// Pages
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";

const App = () => {
  const location = useLocation();
  return (
    <div className="App relative">
      {location.pathname === "/" || location.pathname === "/home" ? (
        <Navbar />
      ) : null}
      <div className="flex bgtertiary h-100 overflow-hidden">
        {/* {location.pathname === "/admin/dashboard" ||
        location.pathname === "/admin/gallery" ? (
          <div className="w-side md-hidden sm-hidden">
            <Sidebar />
          </div>
        ) : null} */}
        <div
          className={
            location.pathname === "/" ||
            location.pathname === "/home" ||
            location.pathname === "/login" ||
            location.pathname === "/register"
              ? "w-full"
              : "w-full mx9 md-mx1 sm-mx1 mrpx9 md-mrpx1 sm-mrpx1"
          }
        >
          {/* {location.pathname === "/admin/dashboard" ||
          location.pathname === "/admin/gallery" ? (
            <Header />
          ) : null} */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ======================= Start-Login ======================= */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* ======================= Start-Login ======================= */}
            {/* ======================= Start-Pages ======================= */}
            <Route path="/home" element={<Home />} />
            {/* ======================= End-Pages ======================= */}
            {/* ======================= Start-Error ======================= */}
            <Route path="*" element={<Error />} />
            {/* <Route path="/coming" element={<Coming />} /> */}
            {/* ======================= End-Error ======================= */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
