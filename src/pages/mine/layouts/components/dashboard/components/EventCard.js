import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FeatherIcon from "feather-icons-react";

const EventCard = () => {
  const initialMenu = [
    {
      icon: 3000,
      name: "Dashboard",
      status: true,
    },
    {
      icon: 2000,
      name: "Dashboard",
      status: false,
    },
    {
      icon: 3000,
      name: "Dashboard",
      status: true,
    },
    {
      icon: 2000,
      name: "Dashboard",
      status: false,
    },
    {
      icon: 3000,
      name: "Dashboard",
      status: true,
    },
    {
      icon: 3000,
      name: "Dashboard",
      status: false,
    },
    {
      icon: 3000,
      name: "Dashboard",
      status: true,
    },
    {
      icon: 6000,
      name: "Dashboard",
      status: false,
    },
  ];

  const [sidebarmenu, setSidebarmenu] = useState(initialMenu);

  const totalIcons = sidebarmenu.reduce((total, item) => total + item.icon, 0);
  const totalIconsa = sidebarmenu
    .filter((item) => item.status)
    .reduce((total, item) => total + item.icon, 0);
  const totalIconsb = sidebarmenu
    .filter((item) => !item.status)
    .reduce((total, item) => total + item.icon, 0);

  const percentageTrue = ((totalIconsa / 3000) * 100).toFixed(0);
  const percentageFalse = ((totalIconsb / 3000) * 100).toFixed(0);
  const differenceInAmount = totalIconsa - totalIconsb;

  return (
    <div className="bill">
      <div>
        <div className="grid-cols-3 gap-12">
          <div className="bgforth px20 py26 rounded-5">
            <div className="flex items-center">
              <div className="event-progress flex items-center justify-center rounded-5">
                <CircularProgressbar
                  value={percentageTrue}
                  text={`${percentageTrue}%`}
                  strokeWidth={10}
                ></CircularProgressbar>
              </div>
              <div className="mlpx14">
                <h6 className="fsize22 font-300 textprimary my1 leading">
                  {totalIconsa}
                </h6>
                <p className="fsize14 mtpx4 font-300 textwhite">Top Courses</p>
              </div>
            </div>
          </div>
          <div className="bgforth px20 py26 rounded-5">
            <div className="flex items-center">
              <div className="event-progress flex items-center justify-center rounded-5">
                <CircularProgressbar
                  value={percentageFalse}
                  text={percentageFalse}
                  strokeWidth={10}
                ></CircularProgressbar>
              </div>
              <div className="mlpx14">
                <h6 className="fsize22 font-300 textprimary my1 leading">
                  {totalIconsb}
                </h6>
                <p className="fsize14 mtpx4 font-300 textwhite">Top Courses</p>
              </div>
            </div>
          </div>
          <div className="bgforth px20 py26 rounded-5">
            <div className="flex items-center">
              <div className="event-progress flex items-center justify-center rounded-5">
                <CircularProgressbar
                  value={differenceInAmount}
                  text={differenceInAmount}
                  strokeWidth={10}
                ></CircularProgressbar>
              </div>
              <div className="mlpx14">
                <h6 className="fsize22 font-300 textprimary my1 leading">
                  {differenceInAmount}
                </h6>
                <p className="fsize14 mtpx4 font-300 textwhite">Top Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-5 sm-rounded-5 mtpx20">
        <div>
          <p className="textwhite">Total Icons: {totalIcons}</p>
          <p className="textwhite">
            Total Icons (when status is true): {totalIconsa}
          </p>
          <p className="textwhite">
            Total Icons (when status is false): {totalIconsb}
          </p>
        </div>
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
              {sidebarmenu.map((e, index) => (
                <tr key={index}>
                  <td className="fsize13 textgray font-300 table-colsm">
                    <p>{e.icon}</p>
                  </td>
                  <td className="fsize13 textgray font-300 table-colsm">
                    <p>{e.name}</p>
                  </td>
                  <td className="fsize13 textgray font-300 table-colsm">
                    <p>{e.status.toString()}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
