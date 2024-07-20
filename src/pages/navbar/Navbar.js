import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
    },
    {
      icon: "user",
      name: "Admin",
      route: "admin",
    },
    {
      icon: "settings",
      name: "Website",
      route: "website",
    },
    {
      icon: "phone-call",
      name: "Sections",
      route: "connect",
    },
    {
      icon: "grid",
      name: "Pages",
      route: "gallery",
    },
  ];

  return (
    <div className="w-full relative z-50 ptpx12 pbpx12 navbar">
      <div className="flex justify-between items-center container mx-auto">
        <div className="mtpx6">
          <h1 className="fsize21 mtpx1 mbpx1 sm-mtpx1 sm-mbpx1 font-900 textwhite">
            Bara<span className="textprimary mlpx2">Singha</span>
          </h1>
        </div>
        <div className="flex items-center mrpx16 mbpx8 sm-hidden">
          {NavMenu.map((e) => (
            <>
              <NavLink
                className="fsize14 activetext mx16 cursor-pointer font-100"
                activeClasses="active"
                to={e.route}
              >
                {e.name}
              </NavLink>
            </>
          ))}
        </div>
        <div className="flex items-center mtpx6">
          <button className="cursor-pointer font-600 textdark border-primary rounded-5 ptpx5 pbpx5 md-ptpx6 md-pbpx6 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 md-fsize14 sm-fsize13 bgprimary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
