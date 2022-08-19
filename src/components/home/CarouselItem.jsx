import React from "react";

const CarouselItem = ({ carouselData }) => {
  return (
    <div
      className="flex justify-center"
      style={{ backgroundColor: carouselData.bgColor }}
    >
      <div className="max-w-6xl w-full relative">
        <div className="hidden md:flex flex-col justify-center absolute top-1/2 left-0 w-1/2 h-full -translate-y-1/2">
          {carouselData.tag && (
            <div
              style={{ backgroundColor: carouselData.tagColor }}
              className="flex justify-center items-center w-28 h-6 text-sm whitespace-nowrap border-none text-white rounded my-4 font-semibold"
            >
              {carouselData.tag}
            </div>
          )}
          {carouselData.mainContent1 && (
            <div className="text-3xl font-bold mb-4">
              <div className="mb-3">{carouselData.mainContent1}</div>
              <div>{carouselData.mainContent2}</div>
            </div>
          )}
          {carouselData.subContent1 && (
            <div className="text-md font-semibold">
              <div>
                {carouselData.subContent1} <br />
              </div>
              <div> {carouselData.subContent2}</div>
            </div>
          )}
        </div>
        <div className="flex md:hidden flex-col justify-end absolute top-1/2 left-0 w-1/2 h-full -translate-y-1/2">
          {carouselData.tag && (
            <div className="flex justify-center items-center bg-blue-700 w-28 h-6 text-sm whitespace-nowrap border-none text-white rounded ml-4 my-1 font-semibold">
              {carouselData.tag}
            </div>
          )}
          {carouselData.mainContent1 && (
            <div className="text-md font-bold x ml-4">
              <div>{carouselData.mainContent1}</div>
              <div className="mb-6">{carouselData.mainContent2}</div>
            </div>
          )}
        </div>
        {carouselData.imgSrc && (
          <img className="" src={carouselData.imgSrc} alt="..." />
        )}
      </div>
    </div>
  );
};

export default CarouselItem;
