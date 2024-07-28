import React from 'react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";
import FeatherIcon from "feather-icons-react";

const TopSection = () => {
   const percentage = 80;
  return (
    <div className="flex w-full dash">
      <div className="w-60">
        <div className="relative">
          <div className="h-cards bgsecondary w-full rounded-10"></div>
          <div className="absolute center-absolute w-90 mx-auto">
            <div className="grid-cols-3 gap-12 card-minus">
              <div className="bgforth w-full b-shadow rounded-10 py16">
                <div className="px20">
                  <h6 className="fsize16 font-400 textwhite my1">Blog</h6>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgsuccess rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgdanger rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgprimary rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                </div>
              </div>
              <div className="bgforth w-full b-shadow rounded-10 py16">
                <div className="px20">
                  <h6 className="fsize16 font-400 textwhite my1">Blog</h6>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgsuccess rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgdanger rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgprimary rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                </div>
              </div>
              <div className="bgforth w-full b-shadow rounded-10 py16">
                <div className="px20">
                  <h6 className="fsize16 font-400 textwhite my1">Blog</h6>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgsuccess rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgdanger rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                  <div className="mtpx5 flex items-center">
                    <div className="dot bgprimary rounded-full"></div>
                    <p className="fsize12 mlpx10 textwhite">Active 12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p14 bgforth rounded-5 mtpx65">
          <div className="flex items-center justify-between">
            <h4 className="fsize16 font-400 my1 textwhite">Campaign</h4>
            <FeatherIcon
              icon="chevron-right"
              size="16"
              className="textwhite p8 rounded-full bg-light-primary"
            />
          </div>
          <div className="flex items-center mtpx16">
            <div className="w-30">
              <div className="dash-progress relative">
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={12}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                  })}
                >
                  <RadialSeparators
                    count={30}
                    style={{
                      background: "#283144",
                      width: "3px",
                      height: `${12}%`,
                    }}
                  />
                </CircularProgressbarWithChildren>
                <div className="flex items-center justify-center absolute top-0 left-0 dash-progress">
                  <p className="textwhite fsize18">{`${percentage}`}%</p>
                </div>
              </div>
            </div>
            <div className="w-70">
              <div className="mtpx8 grid-cols-3 gap-10">
                <div>
                  <p className="fsize12 textgray">Status:</p>
                  <h6 className="fsize14 textsecondary my1 font-400">Live</h6>
                </div>
                <div>
                  <p className="fsize12 textgray">Status:</p>
                  <h6 className="fsize14 textwarning my1 font-400">Live</h6>
                </div>
                <div>
                  <p className="fsize12 textgray">Status:</p>
                  <h6 className="fsize14 textsuccess my1 font-400">Live</h6>
                </div>
              </div>
              <div className="my10 grid-cols-2 gap-10">
                <div>
                  <p className="fsize12 textgray">Status:</p>
                  <h6 className="fsize14 textwhite my1 font-400">Live</h6>
                </div>
                <div>
                  <p className="fsize12 textgray">Status:</p>
                  <h6 className="fsize14 textwhite my1 font-400">Live</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-40 plpx12">
        <div className="grid-cols-2 gap-8">
          <div className="p14 bgforth rounded-5">
            <div className="bill-progress relative mx-auto my10">
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={30}
                  style={{
                    background: "#283144",
                    width: "3px",
                    height: `${12}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              <div className="flex items-center justify-center absolute top-0 left-0 bill-progress">
                <p className="textwhite fsize18">{`${percentage}`}%</p>
              </div>
            </div>
            <p className="textwhite text-center fsize14">Bill summary</p>
          </div>
          <div className="p14 bgforth rounded-5">
            <div className="bill-progress relative mx-auto my10">
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={30}
                  style={{
                    background: "#283144",
                    width: "3px",
                    height: `${12}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              <div className="flex items-center justify-center absolute top-0 left-0 bill-progress">
                <p className="textwhite fsize18">{`${percentage}`}%</p>
              </div>
            </div>
            <p className="textwhite text-center fsize14">Bill summary</p>
          </div>
        </div>
        <div className="bgforth px6 py10 flex items-center justify-between rounded-5 mtpx10">
          <p className="textwhite fsize16 font-500 mlpx10">Automate API</p>
          <FeatherIcon
            icon="chevron-right"
            size="18"
            className="flex textwhite p4 bg-glass2 rounded-full mrpx10"
          />
        </div>
        <div className="p14 bgforth rounded-5 mtpx10">
          <h4 className="fsize16 font-400 my1 textwhite">Api Info</h4>
          <div className="mtpx12 flex flex-wrap">
            <div className="px12 mrpx8 mbpx8 py2 rounded-20 bg-light-success">
              <p className="fsize12 textprimary">Services</p>
            </div>
            <div className="px12 mrpx8 mbpx8 py2 rounded-20 bg-light-success">
              <p className="fsize12 textprimary">Faq</p>
            </div>
            <div className="px12 mrpx8 mbpx8 py2 rounded-20 bg-light-success">
              <p className="fsize12 textprimary">Teams</p>
            </div>
            <div className="px12 mrpx8 mbpx8 py2 rounded-20 bg-light-success">
              <p className="fsize12 textprimary">Gallery</p>
            </div>
            <div className="px12 mrpx8 mbpx8 py2 rounded-20 bg-light-success">
              <p className="fsize12 textprimary">Teams</p>
            </div>
            <div className="px12 mrpx8 mbpx8 py2 rounded-20 bg-light-success">
              <p className="fsize12 textprimary">Blogs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection
