import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";

const LeftSide = () => {
  const percentage = 60;
  return (
    <div className="home">
      <div className="grid-cols-2">
        <div className="flex items-end">
          <div className="h-pro bgforth flex items-center justify-center rounded-full">
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
          <div className="bgforth plpx30 prpx18 py4 left-minus">
            <p className="textwhite font-400 fsize14 sm-fsize12 md-fsize14">
              Section
            </p>
          </div>
        </div>
        <div className="flex items-end">
          <div className="h-pro bgforth flex items-center justify-center rounded-full">
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
          <div className="bgforth plpx30 prpx18 py4 left-minus">
            <p className="textwhite font-400 fsize14 sm-fsize12 md-fsize14">
              Section
            </p>
          </div>
        </div>
      </div>
      <div className="mtpx40">
        <h4 className="fsize20 textwhite my1">Hello 👋🏻</h4>
        <h2 className="fsize28 textwhite my1">
          Hello <span className="textprimary">Baradinga</span>
        </h2>
        <p className="fsize16 textwhite font-400 mtpx5">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual
        </p>
      </div>
      <div className="mtpx30 grid-cols-2 gap-12">
        <div className="left-h rounded-5 bgforth w-full">
          <div className="px16 py18">
            <h5 className="fsize26 leading textwhite my1">12</h5>
            <div className="flex items-center mtpx10">
              <div className="dot bgprimary rounded-full"></div>
              <p className="mlpx8 fsize14 textwhite font-300">Active</p>
            </div>
          </div>
        </div>
        <div className="left-h rounded-5 bgforth w-full">
          <div className="px16 py18">
            <h5 className="fsize26 leading textwhite my1">12</h5>
            <div className="flex items-center mtpx10">
              <div className="dot bgdanger rounded-full"></div>
              <p className="mlpx8 fsize14 textwhite font-300">Inactive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide
