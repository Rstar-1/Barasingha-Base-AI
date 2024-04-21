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
    <div className="w-full relative z-50 ptpx12 pbpx12">
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
        <div className="">
          <h1 className="fsize21 mtpx1 mbpx1 sm-mtpx1 sm-mbpx1 font-900 textwhite">
            Bara<span className="textprimary mlpx2">Singha</span>
          </h1>
        </div>
        <div className="flex items-center mrpx15 sm-hidden">
          {NavMenu.map((e) => (
            <>
              <NavLink activeClasses="textprimary" to={e.route}>
                <p className="fsize14 textwhite mlpx28 cursor-pointer font-500">
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
        <div className="flex items-center">
          <button className="cursor-pointer font-600 textdark border-primary rounded-5 ptpx5 pbpx5 md-ptpx6 md-pbpx6 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 md-fsize14 sm-fsize13 bgprimary">
            Login
          </button>
            <div className="video3-icon mlpx15 flex items-center justify-center">
              <FeatherIcon
                icon="user"
                size="16"
                className="textdark flex"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
