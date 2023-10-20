import React from "react";
import FeatherIcon from "feather-icons-react";
import Bara from "../../assets/bara.jfif";

const Home = () => {
  return (
    <div className="h-ban bgforth">
      <div className="flex container mx-auto items-center h-ban">
        <div className="w-30">
          <div className="flex justify-center">
            <div className="bg-time bg-glass z-50">
              <FeatherIcon icon="close" className="textwhite" />
            </div>
            <div className="bg-date bg-glass mtpx70 margin-leftmin">
              <FeatherIcon icon="close" className="textwhite" />
            </div>
          </div>
          <img
            src={Bara}
            alt="singha"
            className="w-full object-contain mtpx40 h-bara"
          />
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
          <div className="flex justify-between w-full">
            <div className="bg-circle margin-minus">
              <FeatherIcon icon="close" className="textwhite" />
            </div>
            <div className="bg-circle mtpx20">
              <FeatherIcon icon="close" className="textwhite" />
            </div>
            <div className="bg-circle mtpx50">
              <FeatherIcon icon="close" className="textwhite" />
            </div>
            <div className="bg-circle mtpx20">
              <FeatherIcon icon="close" className="textwhite" />
            </div>
            <div className="bg-circle margin-minus">
              <FeatherIcon icon="close" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="w-30 plpx40">
          <div className="bg-glass p15">
            <p className="fsize15 textwhite">Note</p>
          </div>
          <div className="bg-glass p15 mtpx90">
            <div className="bordb p6">
              <p className="fsize15 textwhite">Note</p>
            </div>
            <div className="h-note">
              <ul>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
                <li className="disc textwhite mtpx5">ds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
