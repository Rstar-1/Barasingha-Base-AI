import React from "react";
import {
  CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FeatherIcon from "feather-icons-react";

const EventCard = () => {
  const percentage = 60;
  return (
    <div className="grid-cols-3 event gap-12 w-full mtpx30 items-start">
      <div className="bgforth px20 py26 rounded-5 event-h">
        <div className="grid-cols-2">
          <div className="bordr">
            <div className="bordb py18">
              <div className="event-progress mx-auto relative">
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={6}
                ></CircularProgressbar>
                <div className="flex items-center justify-center absolute top-0 left-0 event-progress">
                  <p className="textwhite fsize14">{`${percentage}`}%</p>
                </div>
              </div>
              <p className="mtpx10 textwhite fsize14 text-center">
                Lorem Ipsum
              </p>
            </div>
            <div className="py18">
              <div className="event-progress mx-auto relative">
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={6}
                ></CircularProgressbar>
                <div className="flex items-center justify-center absolute top-0 left-0 event-progress">
                  <p className="textwhite fsize14">{`${percentage}`}%</p>
                </div>
              </div>
              <p className="mtpx10 textwhite fsize14 text-center">
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="">
            <div className="bordb py18">
              <div className="event-progress mx-auto relative">
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={6}
                ></CircularProgressbar>
                <div className="flex items-center justify-center absolute top-0 left-0 event-progress">
                  <p className="textwhite fsize14">{`${percentage}`}%</p>
                </div>
              </div>
              <p className="mtpx10 textwhite fsize14 text-center">
                Lorem Ipsum
              </p>
            </div>
            <div className="py18">
              <div className="event-progress mx-auto relative">
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={6}
                ></CircularProgressbar>
                <div className="flex items-center justify-center absolute top-0 left-0 event-progress">
                  <p className="textwhite fsize14">{`${percentage}`}%</p>
                </div>
              </div>
              <p className="mtpx10 textwhite fsize14 text-center">
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgforth px20 py26 rounded-5 event-h">
        <h6 className="fsize20 my1 textwhite leading">Sticky Notes</h6>
        <div className="notes-h mtpx16 pbpx10">
          <div className=" grid-cols-1 gap-12">
            <div className="flex items-center justify-between bg-glass2 rounded-5 p8">
              <div className="w-90">
                <p className="fsize14 line-clamp1 font-300 textwhite">
                  Top Courses Top Courses Top Courses Top Courses Top Courses
                  Top Courses Top Courses
                </p>
              </div>
              <FeatherIcon className="textdanger" size={18} icon="trash-2" />
            </div>
            <div className="flex items-center justify-between bg-glass2 rounded-5 p8">
              <div className="w-90">
                <p className="fsize14 line-clamp1 font-300 textwhite">
                  Top Courses Top Courses Top Courses Top Courses Top Courses
                  Top Courses Top Courses
                </p>
              </div>
              <FeatherIcon className="textdanger" size={18} icon="trash-2" />
            </div>
            <div className="flex items-center justify-between bg-glass2 rounded-5 p8">
              <div className="w-90">
                <p className="fsize14 line-clamp1 font-300 textwhite">
                  Top Courses Top Courses Top Courses Top Courses Top Courses
                  Top Courses Top Courses
                </p>
              </div>
              <FeatherIcon className="textdanger" size={18} icon="trash-2" />
            </div>
            <div className="flex items-center justify-between bg-glass2 rounded-5 p8">
              <div className="w-90">
                <p className="fsize14 line-clamp1 font-300 textwhite">
                  Top Courses Top Courses Top Courses Top Courses Top Courses
                  Top Courses Top Courses
                </p>
              </div>
              <FeatherIcon className="textdanger" size={18} icon="trash-2" />
            </div>
            <div className="flex items-center justify-between bg-glass2 rounded-5 p8">
              <div className="w-90">
                <p className="fsize14 line-clamp1 font-300 textwhite">
                  Top Courses Top Courses Top Courses Top Courses Top Courses
                  Top Courses Top Courses
                </p>
              </div>
              <FeatherIcon className="textdanger" size={18} icon="trash-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="bgforth px20 py26 rounded-5 event-h">
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
        <div className="flex items-center justify-between mtpx24">
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
        <div className="flex items-center justify-between mtpx24">
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
        <div className="flex items-center justify-between mtpx24">
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

export default EventCard;
