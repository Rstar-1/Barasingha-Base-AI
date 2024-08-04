import React, {useState} from "react";
import FeatherIcon from "feather-icons-react";

const TopSection = () => {
    const [check, setCheck] = useState(1);
    const pricetab = [
      {
        id: 1,
        name: "Vegis",
      },
      {
        id: 2,
        name: "New",
      },
    ];
  const percentage = 60;
  return (
    <div className="dash">     
      <div className="flex items-center">
        {pricetab.map((e) => (
          <p
            onClick={() => setCheck(e.id)}
            className={
              check === e.id
                ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                : "fsize14 textgray cursor-pointer px16 pbpx6"
            }
          >
            {e.name}
          </p>
        ))}
      </div>
      <div className="mtpx14">
        <div className="bginfo rounded-10 py20 w-full relative">
          <div className="px20">
            <p className="fsize14 textwhite mbpx8">Total</p>
            <h3 className="fsize24 textwhite my1 leading">Event Name</h3>
            <div className="grid-cols-3 gap-8 mtpx26">
              <div>
                <h4 className="fsize14 my1 leading textwhite">Start Date</h4>
                <p className="fsize12 textwhite">12/12/1222</p>
              </div>
              <div>
                <h4 className="fsize14 my1 leading textwhite">End Date</h4>
                <p className="fsize12 textwhite">12/12/1222</p>
              </div>
              <div>
                <h4 className="fsize14 my1 leading textwhite">Time Period</h4>
                <p className="fsize12 textwhite">3 Month</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 p10">
            <FeatherIcon icon="settings" size="16" className="textwhite" />
          </div>
        </div>
        <div className="mtpx16 px8">
          <p className="fsize14 textgray mbpx6">Total</p>
          <h3 className="fsize24 textwhite my1 leading">2,400</h3>
          <div className="mtpx20 grid-cols-2 gap-12">
            <div>
              <div className="flex items-center">
                <div className="bg-glass2 p12 rounded-5">
                  <FeatherIcon
                    icon="chevron-up"
                    className="textsuccess flex"
                    size="20"
                  />
                </div>
                <div className="mlpx8">
                  <p className="fsize12 font-300 textgray">Progress</p>
                  <h5 className="fsize14 font-400 textwhite my1 leading">
                    2,400
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="bg-glass2 p12 rounded-5">
                  <FeatherIcon
                    icon="chevron-down"
                    className="textdanger flex"
                    size="20"
                  />
                </div>
                <div className="mlpx8">
                  <p className="fsize12 font-300 textgray">Loss</p>
                  <h5 className="fsize14 font-400 textwhite my1 leading">
                    2,400
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mtpx35">
        <h3 className="fsize16 textgray my1 leading">Mutual Fund</h3>
        <div className="bgforth px20 py10 flex justify-between items-center rounded-5 mtpx18">
          <h4 className="fsize14 font-400 textwhite my1">Know More</h4>
          <div className="flex items-center">
            <p className="fsize12 textwhite font-400">2000</p>
            <FeatherIcon icon="eye" size="16" className="textsuccess mlpx8" />
          </div>
        </div>
        <div className="bgforth px20 py10 flex justify-between items-center rounded-5 mtpx10">
          <h4 className="fsize14 font-400 textwhite my1">Know More</h4>
          <div className="flex items-center">
            <p className="fsize12 textwhite font-400">2000</p>
            <FeatherIcon icon="eye" size="16" className="textsuccess mlpx8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
