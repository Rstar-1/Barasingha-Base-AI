import React from "react";

const EventCard = () => {
  return (
    <div className="mtpx16 flex">
      <div className="rounded-10 sm-rounded-none w-60">
        <div className="rounded-5 sm-rounded-5">
          <div className="table-w">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>Logo</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Project Name</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Profit</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Expense</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fsize13 textgray  font-300 table-colsm">
                    <img
                      src="https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp"
                      className="table-img"
                      alt="table-img"
                    />
                  </td>
                  <td className="fsize13 textgray font-300 table-collg">
                    <p>e.sectionid</p>
                  </td>
                  <td className="fsize13 textgray font-300 table-collg">
                    <p>e.title</p>
                  </td>
                  <td className="fsize13 textgray font-300 table-collg">
                    <p>e.subtitle</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bgforth p14 rounded-5 mlpx8 w-40">

      </div>
    </div>
  );
};

export default EventCard;
