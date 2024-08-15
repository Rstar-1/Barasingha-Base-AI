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
        <div className="grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-12">
          <div className="bginfo rounded-10 py26 w-full relative">
            <div className="px26">
              <p className="fsize14 textwhite mbpx8">Total</p>
              <h3 className="fsize24 textwhite my1 leading">Event</h3>
              <div className="grid-cols-2 gap-8 mtpx26">
                <div>
                  <h4 className="fsize14 my1 leading textwhite">Start Date</h4>
                  <p className="fsize12 textwhite">12/12/1222</p>
                </div>
                <div>
                  <h4 className="fsize14 my1 leading textwhite">End Date</h4>
                  <p className="fsize12 textwhite">12/12/1222</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bgforth rounded-10 py26 w-full relative">
            <div className="px26">
              <p className="fsize14 textwhite mbpx8">Total</p>
              <h3 className="fsize24 textwhite my1 leading">Event</h3>
              <div className="grid-cols-2 gap-8 mtpx26">
                <div>
                  <h4 className="fsize14 my1 leading textwhite">Start Date</h4>
                  <p className="fsize12 textwhite">12/12/1222</p>
                </div>
                <div>
                  <h4 className="fsize14 my1 leading textwhite">End Date</h4>
                  <p className="fsize12 textwhite">12/12/1222</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <img
                src="https://atlantis.primereact.org/demo/images/ecommerce-dashboard/value.svg"
                alt="slide"
              />
            </div>
          </div>
          <div className="bgforth rounded-10 py26 w-full relative">
            <div className="px26">
              <p className="fsize14 textwhite mbpx8">Total</p>
              <h3 className="fsize24 textwhite my1 leading">Event</h3>
              <div className="grid-cols-2 gap-8 mtpx26">
                <div>
                  <h4 className="fsize14 my1 leading textwhite">Start Date</h4>
                  <p className="fsize12 textwhite">12/12/1222</p>
                </div>
                <div>
                  <h4 className="fsize14 my1 leading textwhite">End Date</h4>
                  <p className="fsize12 textwhite">12/12/1222</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 ">
              <img
                src="https://atlantis.primereact.org/demo/images/ecommerce-dashboard/rate.svg"
                alt="slide"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-5 sm-rounded-5 mtpx20">
        {/* <div>
          <p className="textwhite">Total Icons: {totalIcons}</p>
          <p className="textwhite">
            Total Icons (when status is true): {totalIconsa}
          </p>
          <p className="textwhite">
            Total Icons (when status is false): {totalIconsb}
          </p>
        </div> */}
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
