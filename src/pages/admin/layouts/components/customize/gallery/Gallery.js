import React from "react";
import GalleryTable from "./components/GalleryTable";
import Banner from "../../../../../common/banner/Banner";

const Gallery = () => {
  return (
    <div className="mtpx10 w-route cust-scroll">
      <Banner title="Gallery" admin="Admin" page="Gallery" />
      <GalleryTable />
    </div>
  );
};

export default Gallery;
