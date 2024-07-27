import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FeatherIcon from "feather-icons-react";

const EventCard = () => {
  const percentage = 60;
  return (
    <div className="grid-cols-2 event gap-12 w-full mtpx30 items-start">
      <div className="rounded-5 sm-rounded-5">
        <div className="table-w">
          <table className="w-full">
            <thead>
              <tr>
                <th className="fsize13 textwhite font-300 table-colsm">
                  <p>SectionId</p>
                </th>
                <th className="fsize13 textwhite font-300 table-collg">
                  <p>Image</p>
                </th>
                <th className="fsize13 textwhite font-300 table-collg">
                  <p>Title</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fsize13 textgray  font-300 table-colsm">
                  <p>e.sectionid</p>
                </td>
                <td className="fsize13 textgray  font-300 table-collg">
                  <img
                    src="https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp"
                    className="table-img"
                    alt="table-img"
                  />
                </td>
                <td className="fsize13 textgray font-300 table-collg">
                  <p>e.title</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="grid-cols-2 gap-12">
          <div className="bgforth px20 py26 rounded-5">
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="home-icon flex items-center justify-center rounded-5">
                  <CircularProgressbar
                    value={percentage}
                    strokeWidth={10}
                  ></CircularProgressbar>
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
            <div className="flex items-center justify-between mtpx28">
              <div className="flex items-start">
                <div className="home-icon flex items-center justify-center rounded-5">
                  <CircularProgressbar
                    value={percentage}
                    strokeWidth={10}
                  ></CircularProgressbar>
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
          <div className="bgforth px20 py26 rounded-5">
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="home-icon flex items-center justify-center rounded-5">
                  <CircularProgressbar
                    value={percentage}
                    strokeWidth={10}
                  ></CircularProgressbar>
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
            <div className="flex items-center justify-between mtpx28">
              <div className="flex items-start">
                <div className="home-icon flex items-center justify-center rounded-5">
                  <CircularProgressbar
                    value={percentage}
                    strokeWidth={10}
                  ></CircularProgressbar>
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
        <div className="bgforth px20 py10 flex justify-between items-center rounded-5 mtpx10">
          <h4 className="fsize16 font-400 textwhite my1">Know More</h4>
          <div className="flex items-center">
            <p className="fsize14 textwhite font-400">2000</p>
            <FeatherIcon icon="eye" size="16" className="textsuccess mlpx8" />
          </div>
        </div>
        <div className="bgforth px20 py10 flex justify-between items-center rounded-5 mtpx10">
          <h4 className="fsize16 font-400 textwhite my1">Know More</h4>
          <div className="flex items-center">
            <p className="fsize14 textwhite font-400">2000</p>
            <FeatherIcon icon="eye" size="16" className="textsuccess mlpx8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
