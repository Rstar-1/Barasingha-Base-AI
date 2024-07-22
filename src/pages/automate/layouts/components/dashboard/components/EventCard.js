import React from "react";
import FeatherIcon from "feather-icons-react";
import logo from "./../../../../../../assets/logo.png";

const EventCard = () => {
  return (
    <div>
      <div className="flex gap-8 w-full mtpx20">
        <div className="w-40 flex bgforth p10 rounded-5">
          <div className="w-70 mrpx6">
            <img src={logo} className="real-img rounded-5" alt="real-img" />
          </div>
          <div className="grid-cols-1 mlpx6 w-30 gap-6">
            <img
              src={logo}
              className="preview-img rounded-5"
              alt="preview-img"
            />
            <img
              src={logo}
              className="preview-img rounded-5"
              alt="preview-img"
            />
            <img
              src={logo}
              className="preview-img rounded-5"
              alt="preview-img"
            />
          </div>
        </div>
        <div className="w-60 bgforth rounded-5">
          <div className="p20">
            <div className="flex items-start">
              <div className="home-icon bg-glass2 flex items-center justify-center rounded-full">
                <FeatherIcon
                  icon="user"
                  className="textprimary flex"
                  size={16}
                />
              </div>
              <div className="mlpx12">
                <h6 className="fsize14 font-300 textprimary my1 leading">
                  Top Courses
                </h6>
                <p className="fsize12 font-300 textwhite">1000</p>
              </div>
            </div>
            <div className="p6">
              <p className="fsize14 mtpx10 font-300 textwhite">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual
              </p>
              <div className="grid-cols-4 gap-12 mtpx16">
                <div className="">
                  <h6 className="fsize16 font-300 textwhite my1 leading">
                    Start Date
                  </h6>
                  <div className="mtpx8">
                    <p className="fsize12 font-300 textsuccess w-max px8 py1 bg-light-success">
                      12/21/2024
                    </p>
                  </div>
                </div>
                <div className="">
                  <h6 className="fsize16 font-300 textwhite my1 leading">
                    End Date
                  </h6>
                  <div className="mtpx8">
                    <p className="fsize12 font-300 textdanger w-max px8 py1 bg-light-danger">
                      12/21/2024
                    </p>
                  </div>
                </div>
                <div className="">
                  <h6 className="fsize16 font-300 textwhite my1 leading">
                    Extension
                  </h6>
                  <div className="mtpx8">
                    <p className="fsize14 font-300 textwhite">Custom</p>
                  </div>
                </div>
                <div className="">
                  <h6 className="fsize16 font-300 textwhite my1 leading">
                    Start Date
                  </h6>
                  <div className="mtpx8">
                    <p className="fsize14 font-300 textwhite">12/21/2024</p>
                  </div>
                </div>
              </div>
              <div className="mtpx22 grid-cols-2 gap-10">
                <button className="py8 rounded-5 border-0 bgtertiary textwhite w-full">
                  Start
                </button>
                <button className="py8 rounded-5 border-0 bgtertiary textwhite w-full">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mtpx20">
        <div className="bordb">
          <div className="bgprimary w-max px26 py8 bordbtn">
            <p className="fsize14 textdark font-400">Section</p>
          </div>
        </div>
        <div className="mtpx10 grid-cols-4 gap-12">
          <div className="p10 rounded-5 bgforth">
            <img
              src={logo}
              className="section-img rounded-5"
              alt="section-img"
            />
          </div>
          <div className="p10 rounded-5 bgforth">
            <img
              src={logo}
              className="section-img rounded-5"
              alt="section-img"
            />
          </div>
          <div className="p10 rounded-5 bgforth">
            <img
              src={logo}
              className="section-img rounded-5"
              alt="section-img"
            />
          </div>
          <div className="p10 rounded-5 bgforth">
            <img
              src={logo}
              className="section-img rounded-5"
              alt="section-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
