import React from 'react';
import FeatherIcon from "feather-icons-react";

const TopSection = () => {
  return (
    <div className="dash">
      <div className="flex w-full">
        <div className="w-70 bgforth p20 rounded-5">
          <div>
            <h4 className="fsize24 textwhite my1">Welcome back, Felecia 👋🏻</h4>
            <p className="fsize14 textwhite font-400 mtpx3 w-60">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual
            </p>
            <div className="grid-cols-4 gap-12 mtpx20">
              <div className="flex items-center">
                <div className="dash-icon bgprimary flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textdark flex"
                    size={20}
                  />
                </div>
                <div className="mlpx12">
                  <p className="fsize14 font-300 textwhite mbpx5">
                    Top Courses
                  </p>
                  <h6 className="fsize22 font-300 textwhite my1 leading">12</h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="dash-icon bgsuccess flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textwhite flex"
                    size={20}
                  />
                </div>
                <div className="mlpx12">
                  <p className="fsize14 font-300 textwhite mbpx5">
                    Top Courses
                  </p>
                  <h6 className="fsize22 font-300 textwhite my1 leading">12</h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="dash-icon bgdanger flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textwhite flex"
                    size={20}
                  />
                </div>
                <div className="mlpx12">
                  <p className="fsize14 font-300 textwhite mbpx5">
                    Top Courses
                  </p>
                  <h6 className="fsize22 font-300 textwhite my1 leading">12</h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="dash-icon bgwarning flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textwhite flex"
                    size={20}
                  />
                </div>
                <div className="mlpx12">
                  <p className="fsize14 font-300 textwhite mbpx5">
                    Top Courses
                  </p>
                  <h6 className="fsize22 font-300 textwhite my1 leading">12</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-30 plpx12 grid-cols-1">
          <div className="bgforth flex justify-between items-center py4 w-full rounded-5">
            <p className="textwhite fsize16 font-500 mlpx10">Automate API</p>
            <FeatherIcon
              icon="chevron-right"
              size="18"
              className="flex textwhite p4 bg-glass2 rounded-full mrpx10"
            />
          </div>
          <div className="bgforth mtpx10 rounded-5 py20 w-full">
            <div className="flex items-center justify-between px14">
              <div className="flex items-start">
                <div className="home-icon bg-glass2 flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textprimary flex"
                    size={16}
                  />
                </div>
                <div className="mlpx12">
                  <h6 className="fsize14 font-300 textwhite my1 leading">
                    Top Courses
                  </h6>
                  <p className="fsize12 font-300 textwhite">Top Courses</p>
                </div>
              </div>
              <p className="textsuccess fsize14">70%</p>
            </div>
            <div className="flex items-center justify-between mtpx18 px14">
              <div className="flex items-start">
                <div className="home-icon bg-glass2 flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textprimary flex"
                    size={16}
                  />
                </div>
                <div className="mlpx12">
                  <h6 className="fsize14 font-300 textwhite my1 leading">
                    Top Courses
                  </h6>
                  <p className="fsize12 font-300 textwhite">Top Courses</p>
                </div>
              </div>
              <p className="textsuccess fsize14">70%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection
