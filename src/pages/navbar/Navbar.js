import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
    },
    {
      icon: "user",
      name: "Website",
      route: "website",
    },
    {
      icon: "settings",
      name: "Hardware",
      route: "hardware",
    },
    {
      icon: "grid",
      name: "Gallery",
      route: "gallery",
    },
    {
      icon: "phone-call",
      name: "Sections",
      route: "connect",
    },
  ];

  return (
    <div className="w-full bgforth">
      {sidebarshow ? (
        <div className="bg-glass fixed hidden h-100 sm-block w-full z-99">
          <div className="bgwhite w-90 h-100 absolute right-0 top-0">
            <div className="bgsecondary p5">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Navbar
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setsidebarshow(false)}
                />
              </div>
            </div>
            <div className="mtpx30">
              {NavMenu.map((e) => (
                <>
                  <div className="flex items-center gap-8 plpx20 prpx20 mbpx20">
                    <FeatherIcon
                      icon={e.icon}
                      className="textprimary"
                      size={17}
                    />
                    <NavLink to={e.route}>
                      <p
                        className="fsize14 textforth mtpx4 mbpx4 cursor-pointer font-500"
                        onClick={() => setsidebarshow(false)}
                      >
                        {e.name}
                      </p>
                    </NavLink>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center container mx-auto">
        <div className="logo">
          <h1 className="fsize21 sm-mtpx1 sm-mbpx1 font-900 textwhite">
            Rstar
          </h1>
        </div>
        <div className="flex gap-5 items-center justify-end menu sm-hidden">
          {NavMenu.map((e) => (
            <>
              <NavLink activeClasses="textprimary" to={e.route}>
                <p className="fsize13 textwhite mlpx28 cursor-pointer font-500">
                  {e.name}
                </p>
              </NavLink>
            </>
          ))}
        </div>
        <div className="hidden sm-block">
          <div className="bg-ec sidebar-icon">
            <FeatherIcon
              icon="align-justify"
              className="textforth"
              onClick={() => setsidebarshow(true)}
            />
          </div>
        </div>
        <div className="navbtn flex gap-9 justify-end">
          <button className="bgsecondary border-0 fsize13 font-500 cursor-pointer texttertiary plpx30 prpx30 ptpx8 pbpx8 rounded-20">
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
