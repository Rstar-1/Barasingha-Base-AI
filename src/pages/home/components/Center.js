import React from 'react'

const Center = () => {
  return (
    <div>
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
      <div className="w-70 mx-auto bg-bottom relative">
        <div className="bg-clip bgsecondary"></div>
        <p className="textprimary fsize14 text-center absolute bgsecondary px10 py5 center-absolute">
          B A R A S I N G H A
        </p>
      </div>
    </div>
  );
}

export default Center
