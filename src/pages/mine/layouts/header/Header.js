import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import MobileSidebar from "../../sidebar/components/MobileSidebar";

const Header = () => {
  const location = useLocation();
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <div
      className={
        location.pathname === "/mine/dashboard"
          ? "w-full drawer"
          : "w-route drawer"
      }
    >
      <div className="border-h2 bgforth flex justify-between items-center px16 py10 md-py6 sm-py6 md-px6 sm-px8">
        <div
          className={
            sidebarshow === true
              ? "bg-glass-nav fixed top-0 hidden h-100 md-block sm-block z-99 navview"
              : "bg-glass-nav fixed top-0 hidden h-100 md-block sm-block z-99 navhide"
          }
        >
          <div className="bgwhite w-90 md-w-40 h-100 absolute right-0 top-0">
            <div className="bgprimary p10">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  RS Developers
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setsidebarshow(false)}
                />
              </div>
            </div>
            <MobileSidebar />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <img
            src="https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp"
            alt="logo"
            className="header-logo rounded-full"
          />
          <div>
            <h1 className="fsize18 leading textwhite md-fsize16 sm-fsize14 font-600 mtpx3 sm-mtpx1 mbpx1">
              Web Admin
            </h1>
            <p className="textgray fsize14 sm-fsize12 sm-fsize12 font-500 mtpx4 md-mbpx1 sm-mbpx1 mbpx3">
              Welcome
            </p>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <FeatherIcon
            icon="align-left"
            className="textgray hidden md-block sm-block cursor-pointer"
            size={18}
          />
          <FeatherIcon
            className="textgray hidden md-block sm-block cursor-pointer"
            size={18}
          />
          <FeatherIcon
            icon="settings"
            className="textgray hidden md-block sm-block cursor-pointer"
            size={18}
          />
          <FeatherIcon
            icon="log-out"
            className="textgray hidden md-hidden sm-block cursor-pointer"
            size={18}
          />
          <button className="border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bginfo">
            <FeatherIcon icon="settings" className="textwhite flex" size={16} />
          </button>
          <button className="border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgwarning">
            <FeatherIcon icon="log-out" className="textwhite flex" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
