import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";
import FeatherIcon from "feather-icons-react";

const EventCard = () => {
  const percentage = 80;
  return (
    <div className="">
      <div className="bgforth px6 py10 flex items-center justify-between rounded-5">
        <p className="textwhite fsize16 font-500 mlpx10">Automate API</p>
        <FeatherIcon
          icon="chevron-right"
          size="18"
          className="flex textwhite p4 bg-glass2 rounded-full mrpx10"
        />
      </div>
      <div className="grid-cols-2 gap-8 mtpx10">
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
                  background: "#32425b",
                  width: "3px",
                  height: `${12}%`,
                }}
              />
            </CircularProgressbarWithChildren>
            <div className="flex items-center justify-center absolute top-0 left-0 bill-progress">
              <p className="textwhite fsize18">{`${percentage}`}%</p>
            </div>
          </div>
          <p className="textwhite text-center fsize14">Reviews</p>
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
                  background: "#32425b",
                  width: "3px",
                  height: `${12}%`,
                }}
              />
            </CircularProgressbarWithChildren>
            <div className="flex items-center justify-center absolute top-0 left-0 bill-progress">
              <p className="textwhite fsize18">{`${percentage}`}%</p>
            </div>
          </div>
          <p className="textwhite text-center fsize14">Newsletter</p>
        </div>
      </div>
      <div className="p14 bgforth rounded-5 mtpx10">
        <h4 className="fsize16 font-400 my1 textwhite">Project API</h4>
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
      <div className="p14 bgforth rounded-5 mtpx10">
        <h4 className="fsize16 font-400 my1 textwhite">Other API</h4>
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
        </div>
      </div>
    </div>
  );
};

export default EventCard;
