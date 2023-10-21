import React from 'react'

const Gallery = () => {
  return (
    <div className="h-ban bgforth">
      <div className="container mx-auto">
        <div className="flex gap-12 ptpx50 items-start w-full">
          <div className="w-70">
            <div className="w-full">
              <input
                placeholder="Search"
                className="w-40 bg-glass textwhite rounded-5 p10"
              />
            </div>
            <div className="grid-cols-2 cardgallery gap-12 mtpx20 mbpx20">
              <div className="p10 rounded-5 bgsecondary">
                <img
                  src="https://imgur.com/FkHCrdg.jpg"
                  alt="error"
                  className="h-gallery"
                />
                <div className="p6">
                  <h2 className="mtpx5 mbpx4 fsize20 font-400 textwhite">
                    Barasingha
                  </h2>
                  <p className="fsize12 font-200 text-justify mtpx1 textwhite">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                </div>
              </div>
              <div className="p10 rounded-5 bgsecondary">
                <img
                  src="https://imgur.com/FkHCrdg.jpg"
                  alt="error"
                  className="h-gallery"
                />
                <div className="p6">
                  <h2 className="mtpx5 mbpx4 fsize20 font-400 textwhite">
                    Barasingha
                  </h2>
                  <p className="fsize12 font-200 text-justify mtpx1 textwhite">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                </div>
              </div>
              <div className="p10 rounded-5 bgsecondary">
                <img
                  src="https://imgur.com/FkHCrdg.jpg"
                  alt="error"
                  className="h-gallery"
                />
                <div className="p6">
                  <h2 className="mtpx5 mbpx4 fsize20 font-400 textwhite">
                    Barasingha
                  </h2>
                  <p className="fsize12 font-200 text-justify mtpx1 textwhite">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                </div>
              </div>
              <div className="p10 rounded-5 bgsecondary">
                <img
                  src="https://imgur.com/FkHCrdg.jpg"
                  alt="error"
                  className="h-gallery"
                />
                <div className="p6">
                  <h2 className="mtpx5 mbpx4 fsize20 font-400 textwhite">
                    Barasingha
                  </h2>
                  <p className="fsize12 font-200 text-justify mtpx1 textwhite">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-30">
            <div className="w-full w-full">
              <input
                placeholder="Search"
                className="w-full textwhite bg-glass rounded-5 p10"
              />
            </div>
            <div className="grid-cols-1  gap-12 mtpx20 mbpx20">
              <div className="p10 w-full rounded-5 bgsecondary">
                <h3 className="mtpx5 mbpx4 fsize15 font-400 textwhite">
                  Barasingha
                </h3>
              </div>
              <div className="p10 w-full rounded-5 bgsecondary">
                <h3 className="mtpx5 mbpx4 fsize15 font-400 textwhite">
                  Barasingha
                </h3>
              </div>
              <div className="p10 w-full rounded-5 bgsecondary">
                <h3 className="mtpx5 mbpx4 fsize15 font-400 textwhite">
                  Barasingha
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery
