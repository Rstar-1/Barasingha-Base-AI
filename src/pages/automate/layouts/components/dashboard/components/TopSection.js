import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import FeatherIcon from "feather-icons-react";

const TopSection = () => {
  const percentage = 60;
  return (
    <div className="dash">
      <div className="flex w-full">
        <div className="w-60 bordr py10">
          <div>
            <h4 className="fsize24 textwhite my1">Welcome back, Felecia 👋🏻</h4>
            <p className="fsize14 textgray font-400 mtpx3 w-70">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual
            </p>
            <div className="grid-cols-3 gap-12 mtpx16">
              <div className="flex items-center">
                <div className="dash-icon bg-glass2 flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textinfo flex"
                    size={20}
                  />
                </div>
                <div className="mlpx12">
                  <p className="fsize14 font-300 textgray mbpx5">Top Courses</p>
                  <h6 className="fsize22 font-300 textinfo my1 leading">
                    12
                  </h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="dash-icon bg-glass2 flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textprimary flex"
                    size={20}
                  />
                </div>
                <div className="mlpx12">
                  <p className="fsize14 font-300 textgray mbpx5">Top Courses</p>
                  <h6 className="fsize22 font-300 textprimary my1 leading">
                    12
                  </h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="dash-icon bg-glass2 flex items-center justify-center rounded-5">
                  <FeatherIcon
                    icon="grid"
                    className="textwarning flex"
                    size={20}
                  />
                </div>
                <div className="mlpx12">
                  <p className="fsize14 font-300 textgray mbpx5">Top Courses</p>
                  <h6 className="fsize22 font-300 textwarning my1 leading">
                    12
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-40 px16 flex items-center">
          <div className="w-50">
            <h5 className="fsize20 textwhite my1">Time Spendings</h5>
            <p className="fsize14 textgray font-400 mtpx3 ">Weekly report</p>
            <div className="mtpx12 grid-cols-1 gap-10">
              <div className="flex items-center justify-between">
                <h6 className="fsize16 textwhite my1">Active</h6>
                <p className="fsize14 textsuccess bg-light-success font-400 mtpx3 w-max px12">
                  15%
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h6 className="fsize16 textwhite my1">Inactive</h6>
                <p className="fsize14 textdanger bg-light-danger font-400 mtpx3 w-max px12">
                  15%
                </p>
              </div>
            </div>
          </div>
          <div className="w-50 flex justify-center items-center pl10">
            <div className="dash-progress relative">
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={50}
                  style={{
                    background: "#242831",
                    width: "3px",
                    height: `${12}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              <div className="flex items-center justify-center absolute top-0 left-0 dash-progress">
                <p className="textwhite fsize22">{`${percentage}`}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
