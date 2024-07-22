import { Route, Routes, useLocation } from "react-router-dom";
// Components
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
// Components
import Sidebar2 from "./pages/automate/sidebar/Sidebar";
import Header2 from "./pages/automate/layouts/header/Header";
// Components
import Sidebar3 from "./pages/mine/sidebar/Sidebar";
import Header3 from "./pages/mine/layouts/header/Header";
// Auth Pages
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// Other pages
import Coming from "./pages/admin/layouts/components/coming/Coming";
import Error from "./pages/error/Error";
// Pages
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Dashboard2 from "./pages/automate/layouts/components/dashboard/Dashboard";
import Dashboard3 from "./pages/mine/layouts/components/dashboard/Dashboard";
import Seo from "./pages/admin/layouts/components/seo/Seo";
import Management from "./pages/admin/layouts/components/management/Management";
import Cms from "./pages/admin/layouts/components/cms/Cms";
import Billing from "./pages/admin/layouts/components/billing/Billing";
import Settings from "./pages/admin/layouts/components/settings/Settings";
import Brands from "./pages/admin/layouts/components/customize/brands/Brands";
import Clients from "./pages/admin/layouts/components/customize/clients/Clients";
import Team from "./pages/admin/layouts/components/customize/teams/Team";
import Service from "./pages/admin/layouts/components/customize/services/Service";
import Gallery from "./pages/admin/layouts/components/customize/gallery/Gallery";
import Review from "./pages/admin/layouts/components/customize/reviews/Review";
import Faq from "./pages/admin/layouts/components/customize/faqs/Faq";
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
        {location.pathname === "/admin/dashboard" ||
        location.pathname === "/admin/gallery" ? (
          <div className="w-side md-hidden sm-hidden">
            <Sidebar />
          </div>
        ) : null}
        {location.pathname === "/automate/dashboard" ? (
          <div className="w-side md-hidden sm-hidden">
            <Sidebar2 />
          </div>
        ) : null}
        {location.pathname === "/mine/dashboard" ? (
          <div className="w-side md-hidden sm-hidden">
            <Sidebar3 />
          </div>
        ) : null}
        <div
          className={
            location.pathname === "/" ||
            location.pathname === "/home" ||
            location.pathname === "/login" ||
            location.pathname === "/register"
              ? "w-full"
              : "w-route mlpx9 md-mlpx1 sm-mlpx1 mrpx9 md-mrpx1 sm-mrpx1"
          }
        >
          {location.pathname === "/automate/dashboard" ||
          location.pathname === "/admin/gallery" ? (
            <Header />
          ) : null}
          {location.pathname === "/admin/dashboard" ? <Header2 /> : null}
          {location.pathname === "/mine/dashboard" ? <Header3 /> : null}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ======================= Start-Login ======================= */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* ======================= Start-Login ======================= */}
            {/* ======================= Start-Pages ======================= */}
            <Route path="/home" element={<Home />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/gallery" element={<Gallery />} />
            <Route path="/automate/dashboard" element={<Dashboard2 />} />
            <Route path="/mine/dashboard" element={<Dashboard3 />} />
            {/*<Route path="/management" element={<Management />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/services" element={<Service />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/review" element={<Review />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cms" element={<Cms />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/automation" element={<Settings />} /> */}
            {/* ======================= End-Pages ======================= */}
            {/* ======================= Start-Error ======================= */}
            <Route path="*" element={<Error />} />
            <Route path="/coming" element={<Coming />} />
            {/* ======================= End-Error ======================= */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
