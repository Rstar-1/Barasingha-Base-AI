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
                  <FeatherIcon icon="command" className="textprimary" />
                </div>
                <div className="bg-circle mtpx15 mrpx20 mlpx20">
                  <FeatherIcon icon="trending-up" className="textprimary" />
                </div>
                <div className="bg-circle mtpx40">
                  <FeatherIcon icon="life-buoy" className="textprimary" />
                </div>
                <div className="bg-circle mtpx15 mrpx20 mlpx20">
                  <FeatherIcon icon="music" className="textprimary" />
                </div>
                <div className="bg-circle margin-minus mbpx5">
                  <FeatherIcon icon="slack" className="textprimary" />
                </div>
              </div>
            </div>
            <div className="w-30">
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
