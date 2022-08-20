import React from "react";
import { Link } from "react-router-dom";

const LectureListItem = ({ lectureData }) => {
  return (
    <div className="w-1/2 sm:w-1/3 text-sm md:w-1/4 md:text-base lg:w-1/5 h-full border-box p-1 mt-6">
      <Link to="/about">
        <div className="w-full h-1/2">
          <img
            className="w-full h-full"
            src={lectureData.thumnailImgSrc}
            alt=""
          />
        </div>
        <div className="w-full h-1/2 border-box">
          <div className="flex flex-col justify-start w-full h-1/2 whitespace-normal">
            {lectureData.title}
          </div>
          <div className="flex flex-col justify-start w-full h-1/2">
            <div className="w-full h-1/3">{lectureData.author}</div>
            <div className="w-full h-1/3 font-bold text-blue-700">
              {lectureData.price === "무료"
                ? lectureData.price
                : `\\ ${lectureData.price}`}
            </div>
            <div className="w-full h-1/3">+{lectureData.view}명</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LectureListItem;
