import React from 'react';

const Banner = (props) => {
  return (
    <div>
      <h4 className="fsize20 font-300 textwhite my1">{props.title}</h4>
      <p className="fsize14 textgray mtpx4 mbpx4 cursor-pointer font-500">
        Barasingha / {props.admin} / {props.page}
      </p>
    </div>
  );
}

export default Banner
