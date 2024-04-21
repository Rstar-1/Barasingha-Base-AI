import React from "react";
import FeatherIcon from "feather-icons-react";

const Home = () => {
  return (
    <div className="h-ban bgforth fixed w-full top-0 z-10">
      <img
        src="https://html.themeholy.com/haona/demo/assets/img/bg/hero-2-bg-shape.png"
        alt="h-ban"
        className="h-ban w-full"
      />
      <div className="absolute z-50 w-full top-0 left-0 flex items-center h-ban">
        <div className="flex justify-between items-center container mx-auto w-full">
          <div className="w-30">
            <div className="flex items-center">
              <img
                src="https://html.themeholy.com/haona/demo/assets/img/icon/hand.svg"
                alt="hand-img"
                className="hand-img"
              />
              <p className="textwhite font-400 mlpx10 mtpx3 mbpx1 fsize16 sm-fsize14 md-fsize14">
                HI, I'M ZYAN! CREATIVE
              </p>
            </div>
            <h3 className="textwhite font-600 sm-font-400 mtpx9 sm-mtpx2 leading mbpx1 fsize30 md-fsize29 sm-fsize21">
              ROBERT FOX
              <span className="textprimary mlpx5">DESIGNER</span> UI/UX
            </h3>
            <p className="textgray font-400 mtpx15 mbpx1 fsize16 sm-fsize14 md-fsize14">
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences.
            </p>
          </div>
          <div className="w-40">
            <div class="reactor-container">
              <div class="reactor-container-inner circle abs-center"></div>
              <div class="tunnel circle abs-center"></div>
              <div class="core-wrapper circle abs-center"></div>
              <div class="core-outer circle abs-center"></div>
              <div class="core-inner circle abs-center"></div>
              <div class="coil-container">
                <div class="coil coil-1"></div>
                <div class="coil coil-2"></div>
                <div class="coil coil-3"></div>
                <div class="coil coil-4"></div>
                <div class="coil coil-5"></div>
                <div class="coil coil-6"></div>
                <div class="coil coil-7"></div>
                <div class="coil coil-8"></div>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="bg-circle margin-minus">
                <FeatherIcon icon="command" size="18" className="textprimary" />
              </div>
              <div className="bg-circle mtpx15 mrpx28 mlpx28">
                <FeatherIcon
                  icon="trending-up"
                  size="18"
                  className="textprimary"
                />
              </div>
              <div className="bg-circle mtpx40">
                <FeatherIcon
                  icon="life-buoy"
                  size="18"
                  className="textprimary"
                />
              </div>
              <div className="bg-circle mtpx15 mrpx28 mlpx28">
                <FeatherIcon icon="music" size="18" className="textprimary" />
              </div>
              <div className="bg-circle margin-minus mbpx5">
                <FeatherIcon icon="slack" size="18" className="textprimary" />
              </div>
            </div>
          </div>
          <div className="w-30">
            <div className="bg-glass2 ptpx30 pbpx30 w-full"></div>
            <div className="bg-glass2 ptpx30 pbpx30 mtpx20 w-full"></div>
            <div className="bg-glass2 ptpx30 pbpx30 mtpx20 w-full"></div>
            <div className="bg-glass2 ptpx30 pbpx30 mtpx20 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
