import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import FeatherIcon from "feather-icons-react";

const RightSide = () => {
  const percentage = 60;
  return (
    <div className="home">
      <div className="grid-cols-2">
        <div className="flex justify-end items-end">
          <div className="bgsecondary prpx30 plpx18 py4 right-minus">
            <p className="textwhite font-400 fsize14 sm-fsize12 md-fsize14">
              Section
            </p>
          </div>
          <div className="h-pro bgsecondary flex items-center justify-center rounded-full">
            <div className="h-progress relative">
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={20}
                  style={{
                    background: "#283144",
                    width: "2px",
                    height: `${10}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              <div className="flex items-center justify-center absolute top-0 left-0 h-progress">
                <p className="textwhite fsize12">{`${percentage}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <div className="bgsecondary prpx30 plpx18 py4 right-minus">
            <p className="textwhite font-400 fsize14 sm-fsize12 md-fsize14">
              Section
            </p>
          </div>
          <div className="h-pro bgsecondary flex items-center justify-center rounded-full">
            <div className="h-progress relative">
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={20}
                  style={{
                    background: "#283144",
                    width: "2px",
                    height: `${10}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              <div className="flex items-center justify-center absolute top-0 left-0 h-progress">
                <p className="textwhite fsize12">{`${percentage}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mtpx20 px20 py25 bgsecondary rounded-5">
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="home-icon bg-glass2 flex items-center justify-center rounded-5">
              <FeatherIcon icon="grid" className="textprimary flex" size={16} />
            </div>
            <div className="mlpx12">
              <h6 className="fsize16 font-300 textwhite my1 leading">
                Top Courses
              </h6>
              <p className="fsize12 font-300 textwhite">Top Courses</p>
            </div>
          </div>
          <p className="textsuccess fsize14">70%</p>
        </div>
        <div className="mtpx24 flex items-center justify-between">
          <div className="flex items-start">
            <div className="home-icon bg-glass2 flex items-center justify-center rounded-5">
              <FeatherIcon icon="grid" className="textprimary flex" size={16} />
            </div>
            <div className="mlpx12">
              <h6 className="fsize16 font-300 textwhite my1 leading">
                Top Courses
              </h6>
              <p className="fsize12 font-300 textwhite">Top Courses</p>
            </div>
          </div>
          <p className="textdanger fsize14">30%</p>
        </div>
        <div className="mtpx24 flex items-center justify-between">
          <div className="flex items-start">
            <div className="home-icon bg-glass2 flex items-center justify-center rounded-5">
              <FeatherIcon icon="grid" className="textprimary flex" size={16} />
            </div>
            <div className="mlpx12">
              <h6 className="fsize16 font-300 textwhite my1 leading">
                Top Courses
              </h6>
              <p className="fsize12 font-300 textwhite">Top Courses</p>
            </div>
          </div>
          <p className="textsuccess fsize14">70%</p>
        </div>
        <div className="mtpx24 flex items-center justify-between">
          <div className="flex items-start">
            <div className="home-icon bg-glass2 flex items-center justify-center rounded-5">
              <FeatherIcon icon="grid" className="textprimary flex" size={16} />
            </div>
            <div className="mlpx12">
              <h6 className="fsize16 font-300 textwhite my1 leading">
                Top Courses
              </h6>
              <p className="fsize12 font-300 textwhite">Top Courses</p>
            </div>
          </div>
          <p className="textsuccess fsize14">70%</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
