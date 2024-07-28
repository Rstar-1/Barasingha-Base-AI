import React from "react";
import ReactPaginate from "react-paginate";

const EventCard = () => {
  return (
    <div className="mtpx16">
      <div className="rounded-10 sm-rounded-none">
        <div className="rounded-5 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14">
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
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Sub Title</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Description</p>
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
                  <td className="fsize13 textgray font-300 table-collg">
                    <p>e.subtitle</p>
                  </td>
                  <td className="fsize13 textgray font-300 table-collg">
                    <p>e.descriptio</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount="6"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
